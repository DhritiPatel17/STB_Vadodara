import { useState } from "react";
import { Page } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import HomeView from "./components/HomeView";
import CatalogView from "./components/CatalogView";
import AboutView from "./components/AboutView";
import TestimonialsView from "./components/TestimonialsView";
import ContactView from "./components/ContactView";
import AdminView from "./components/AdminView";

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const onSubmitEnquiry = async (
    fullName: string,
    phoneNumber: string,
    corporateEmail: string,
    requirement: string,
    message: string,
    honeypot?: string
  ): Promise<boolean> => {
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          corporateEmail,
          productRequirement: requirement,
          detailedMessage: message,
          honeypot: honeypot || "",
        }),
      });
      if (response.ok) {
        const data = await response.json();
        return data.success;
      }
      return false;
    } catch (err) {
      console.error("Enquiry submit failed", err);
      return false;
    }
  };

  const handleOpenQuote = () => {
    setActivePage("contact");
    setTimeout(() => {
      document.getElementById("contactForm")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] flex flex-col selection:bg-[#f6be39] selection:text-[#131315]">
      {/* Shared Header Navigation */}
      <Header
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Page Container */}
      <main className="flex-grow pt-16 sm:pt-20 pb-20 md:pb-0">
        {activePage === "home" && (
          <HomeView
            setActivePage={handlePageChange}
            setFilterCategory={setFilterCategory}
          />
        )}
        {activePage === "catalog" && (
          <CatalogView
            setActivePage={handlePageChange}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            onSubmitEnquiry={onSubmitEnquiry}
          />
        )}
        {activePage === "about" && <AboutView />}
        {activePage === "testimonials" && (
          <TestimonialsView setActivePage={handlePageChange} />
        )}
        {activePage === "contact" && (
          <ContactView onSubmitEnquiry={onSubmitEnquiry} />
        )}
        {activePage === "admin" && <AdminView />}
      </main>

      {/* Shared Footer block */}
      <Footer setActivePage={handlePageChange} />

      {/* Sticky Mobile Call & WhatsApp Bar */}
      <MobileBottomNav />
    </div>
  );
}
