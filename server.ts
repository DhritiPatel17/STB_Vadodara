import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const PORT = 3000;
const DATA_FILE = path.join(process.cwd(), "enquiries.json");

interface Enquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  corporateEmail: string;
  productRequirement: string;
  detailedMessage: string;
  createdAt: string;
}

// Load current enquiries from file
function loadEnquiries(): Enquiry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to load enquiries:", error);
  }
  return [];
}

// Save enquiries to file
function saveEnquiries(enquiries: Enquiry[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to save enquiries:", error);
  }
}

// Rate limiting in-memory store: IP -> array of timestamps
const ipSubmissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_HOUR = 5;

// Validation helpers
function validateFullName(name: string): boolean {
  if (!name || typeof name !== "string") return false;
  const trimmed = name.trim();
  if (!/^[a-zA-Z\s.]*$/.test(trimmed)) return false;
  const letterCount = (trimmed.match(/[a-zA-Z]/g) || []).length;
  return letterCount >= 2;
}

function validatePhoneNumber(phone: string): boolean {
  if (!phone || typeof phone !== "string") return false;
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
}

function validateEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();
  if (/\s/.test(trimmed)) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(trimmed);
}

function validateRequirement(reqText: string): boolean {
  if (!reqText || typeof reqText !== "string") return false;
  return reqText.trim().length >= 10;
}

async function startServer() {
  const app = express();

  // Middleware
  app.use(express.json());

  // API endpoints FIRST
  app.post("/api/enquiries", (req, res) => {
    try {
      const { fullName, phoneNumber, corporateEmail, productRequirement, detailedMessage, honeypot, website } = req.body;

      // 1. Honeypot check: If filled by bots, silently return success without saving
      if (honeypot || website) {
        return res.status(200).json({ success: true, message: "Enquiry received" });
      }

      // 2. IP Rate Limiting: max 5 submissions per hour
      const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() || req.socket.remoteAddress || "unknown";
      const now = Date.now();
      const clientTimestamps = (ipSubmissions.get(ip) || []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

      if (clientTimestamps.length >= MAX_SUBMISSIONS_PER_HOUR) {
        return res.status(429).json({
          error: "Too many requests. You have reached the submission limit for this hour. Please try again later.",
        });
      }

      // 3. Strict Server-side Validation
      if (!validateFullName(fullName)) {
        return res.status(400).json({ error: "Enter your full name" });
      }

      if (!validatePhoneNumber(phoneNumber)) {
        return res.status(400).json({ error: "Enter a valid 10 digit mobile number" });
      }

      if (!validateEmail(corporateEmail)) {
        return res.status(400).json({ error: "Enter a valid email address" });
      }

      const requirementText = detailedMessage || productRequirement || "";
      if (!validateRequirement(requirementText)) {
        return res.status(400).json({ error: "Please tell us what steel you need" });
      }

      // Record rate limit timestamp
      clientTimestamps.push(now);
      ipSubmissions.set(ip, clientTimestamps);

      const enquiries = loadEnquiries();
      const newEnquiry: Enquiry = {
        id: Math.random().toString(36).substring(2, 9),
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        corporateEmail: corporateEmail.trim(),
        productRequirement: productRequirement || "General Inquiry",
        detailedMessage: detailedMessage || requirementText,
        createdAt: new Date().toISOString(),
      };

      enquiries.unshift(newEnquiry); // Add at the beginning
      saveEnquiries(enquiries);

      res.status(201).json({ success: true, enquiry: newEnquiry });
    } catch (error: any) {
      res.status(500).json({ error: error?.message || "Internal Server Error" });
    }
  });

  app.get("/api/enquiries", (req, res) => {
    try {
      const enquiries = loadEnquiries();
      res.json({ success: true, enquiries });
    } catch (error: any) {
      res.status(500).json({ error: error?.message || "Internal Server Error" });
    }
  });

  app.delete("/api/enquiries", (req, res) => {
    try {
      saveEnquiries([]);
      res.json({ success: true });
    } catch (error: any) {
      res.status(500).json({ error: error?.message || "Internal Server Error" });
    }
  });

  // Vite development vs production static setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
