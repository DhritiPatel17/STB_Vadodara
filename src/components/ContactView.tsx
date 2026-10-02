import { useState, FormEvent } from "react";
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Plus, Minus } from "lucide-react";
import { CONTACT_INFO } from "../constants";

interface ContactViewProps {
  onSubmitEnquiry: (
    fullName: string,
    phoneNumber: string,
    corporateEmail: string,
    requirement: string,
    message: string,
    honeypot?: string
  ) => Promise<boolean>;
}

const faqs = [
  {
    question: "Which types of steel do you supply?",
    answer: "We supply TMT bars, beams, channels, angles, and other structural steel for building work.",
  },
  {
    question: "Does the steel follow Indian standards?",
    answer: "Yes. Our steel follows Indian (IS) standards.",
  },
  {
    question: "Do you give a test certificate?",
    answer: "Yes. We give the manufacturer's test certificate with the material when you ask for it.",
  },
  {
    question: "How do I get today's rate?",
    answer: "Steel rates change often. Call us or send your requirement using the form above, and we will send you the current rate.",
  },
  {
    question: "Do you deliver to my site?",
    answer: "Yes. We deliver in Vadodara and nearby areas. Tell us your site location and we will confirm delivery.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery time depends on the quantity and your location. We confirm the date when you place the order.",
  },
  {
    question: "Is there a minimum order?",
    answer: "Please call us and tell us your requirement. We will tell you the minimum quantity for the product you need.",
  },
  {
    question: "What payment options do you accept?",
    answer: "Please contact us to confirm payment options for your order.",
  },
  {
    question: "Will I get a proper bill?",
    answer: "Yes. We give a GST bill for every order.",
  },
  {
    question: "How can I contact you quickly?",
    answer: "Call us on +91 90990 25004 or send a message on WhatsApp. Our office timings are shown on this page.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Client-side validation helpers matching exact requirements
function validateFullName(name: string): string | null {
  if (!name || !name.trim()) {
    return "Enter your full name";
  }
  const trimmed = name.trim();
  // Letters, spaces, and dots only, no numbers
  if (!/^[a-zA-Z\s.]*$/.test(trimmed)) {
    return "Enter your full name";
  }
  // At least 2 letters
  const letterCount = (trimmed.match(/[a-zA-Z]/g) || []).length;
  if (letterCount < 2) {
    return "Enter your full name";
  }
  return null;
}

function validatePhoneNumber(phone: string): string | null {
  if (!phone || !phone.trim()) {
    return "Enter a valid 10 digit mobile number";
  }
  // Digits only, exactly 10 digits. Must start with 6, 7, 8, or 9.
  // Allow optional "+91", "91", or "0" at start, remove spaces and dashes before checking.
  const cleaned = phone.replace(/[\s\-()]/g, "");
  if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleaned)) {
    return "Enter a valid 10 digit mobile number";
  }
  return null;
}

function validateEmail(email: string): string | null {
  if (!email || !email.trim()) {
    return "Enter a valid email address";
  }
  const trimmed = email.trim();
  // No spaces allowed
  if (/\s/.test(trimmed)) {
    return "Enter a valid email address";
  }
  // Must have text before "@", domain name, dot, ending of at least 2 letters
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return "Enter a valid email address";
  }
  return null;
}

function validateRequirement(message: string): string | null {
  if (!message || message.trim().length < 10) {
    return "Please tell us what steel you need";
  }
  return null;
}

export default function ContactView({ onSubmitEnquiry }: ContactViewProps) {
  // Form fields
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [corporateEmail, setCorporateEmail] = useState("");
  const [productRequirement, setProductRequirement] = useState("");
  const [detailedMessage, setDetailedMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  // Touched state for onBlur / submit checks
  const [touched, setTouched] = useState({
    fullName: false,
    phoneNumber: false,
    corporateEmail: false,
    detailedMessage: false,
  });

  // States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStatus, setShowStatus] = useState<"idle" | "success" | "error">("idle");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Computed errors
  const fullNameError = validateFullName(fullName);
  const phoneError = validatePhoneNumber(phoneNumber);
  const emailError = validateEmail(corporateEmail);
  const requirementError = validateRequirement(detailedMessage);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched on submit
    setTouched({
      fullName: true,
      phoneNumber: true,
      corporateEmail: true,
      detailedMessage: true,
    });

    // Do not send the form until all fields pass
    if (fullNameError || phoneError || emailError || requirementError) {
      return;
    }

    setIsSubmitting(true);
    setShowStatus("idle");

    // Hidden spam-trap honeypot check: silently simulate success if filled
    if (honeypot) {
      setTimeout(() => {
        setIsSubmitting(false);
        setShowStatus("success");
        setFullName("");
        setPhoneNumber("");
        setCorporateEmail("");
        setProductRequirement("");
        setDetailedMessage("");
        setHoneypot("");
        setTouched({
          fullName: false,
          phoneNumber: false,
          corporateEmail: false,
          detailedMessage: false,
        });
      }, 500);
      return;
    }

    const categoryText = productRequirement || "General Inquiry";
    const outcome = await onSubmitEnquiry(
      fullName,
      phoneNumber,
      corporateEmail,
      categoryText,
      detailedMessage,
      honeypot
    );

    setIsSubmitting(false);
    if (outcome) {
      setShowStatus("success");
      // Reset form
      setFullName("");
      setPhoneNumber("");
      setCorporateEmail("");
      setProductRequirement("");
      setDetailedMessage("");
      setHoneypot("");
      setTouched({
        fullName: false,
        phoneNumber: false,
        corporateEmail: false,
        detailedMessage: false,
      });
    } else {
      setShowStatus("error");
    }
  };

  return (
    <div className="text-[#e5e1e4] font-sans pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Title section */}
      <section className="mb-16 mt-12">
        <span className="text-[#f6be39] font-mono text-xs uppercase tracking-[0.3em] block mb-2 font-bold">
          GET IN TOUCH
        </span>
        <h1 className="font-sans font-bold text-3xl sm:text-4xl text-[#e5e1e4] uppercase tracking-wide">
          TALK TO US ABOUT <span className="text-[#f6be39]">YOUR STEEL NEEDS</span>
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed">
          Tell us what steel you need and how much. We will send you a clear price and delivery date. Call us, message us, or fill in the form below.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact info clusters - Left side */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Direct Connect */}
          <div className="bg-[#15171C] p-8 rounded-xl border border-gray-800 transition-all hover:border-[#f6be39]/30">
            <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wider text-[#f6be39] uppercase border-b border-gray-800 pb-3 mb-6 font-bold select-none">
              Direct Connect
            </h3>
            <div className="space-y-4 text-xs sm:text-sm font-sans">
              <a href={CONTACT_INFO.phoneTel} className="flex items-center gap-4 group cursor-pointer text-left">
                <span className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700 text-gray-400 group-hover:text-[#f6be39] transition-all">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-gray-400 group-hover:text-white transition-all">{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group cursor-pointer text-left"
              >
                <span className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700 text-gray-400 group-hover:text-[#f6be39] transition-all">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <span className="text-gray-400 group-hover:text-white transition-all">WhatsApp Business</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 group cursor-pointer text-left"
              >
                <span className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700 text-gray-400 group-hover:text-[#f6be39] transition-all">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-gray-400 group-hover:text-white transition-all truncate">
                  {CONTACT_INFO.email}
                </span>
              </a>
            </div>
          </div>

          {/* Headquarters Maps Card */}
          <div id="map-card" className="bg-[#15171C] p-8 rounded-xl border border-gray-800 transition-all hover:border-[#f6be39]/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="w-10 h-10 rounded bg-[#f6be39]/10 border border-[#f6be39]/30 text-[#f6be39] flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wider text-[#f6be39] uppercase leading-none">
                  OFFICE ADDRESS
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed font-sans">
                  B/11, Sabji Mandi Road, Abhay Nagar,
                  <br />
                  Gorwa, Vadodara, Gujarat - 390016
                </p>
              </div>
            </div>

            {/* Office photo */}
            <div className="w-full rounded-lg overflow-hidden border border-gray-800 bg-[#0d0e12]">
              <img
                className="w-full h-auto block"
                style={{ width: "100%", height: "auto" }}
                alt="Shree Tirupati Balaji & Sons office"
                src="/images/office.jpg"
              />
            </div>
          </div>

          {/* Operational Hours */}
          <div className="bg-[#15171C] p-8 rounded-xl border border-gray-800 transition-all hover:border-[#f6be39]/30">
            <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wider text-[#f6be39] uppercase border-b border-gray-800 pb-3 mb-6 select-none">
              OPERATIONAL HOURS
            </h3>
            <div className="space-y-3 font-sans">
              <div className="hours-row border-b border-gray-800/40 pb-2">
                <span className="hours-day">Mon – Sat</span>
                <span className="hours-time">9:00 AM – 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">9:00 AM – 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form - Right side */}
        <div className="lg:col-span-7">
          <div className="bg-[#15171C] p-6 sm:p-10 rounded-xl border border-gray-800 relative overflow-hidden h-full">
            <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#e5e1e4] mb-8 uppercase tracking-wide">
              SUBMIT PROJECT REQUIREMENT
            </h2>

            {/* Success notice */}
            {showStatus === "success" && (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-lg p-5 mb-6 text-xs sm:text-sm text-gray-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-wider">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>TRANSMITTED SUCCESSFULLY</span>
                </div>
                <p className="leading-relaxed">
                  Your project requirements and specifications have been logged inside our database system. A sales engineer will follow up with verified price sheets within 2 hours.
                </p>
              </div>
            )}

            {/* Error notice */}
            {showStatus === "error" && (
              <div className="bg-red-950/40 border border-red-500/40 rounded-lg p-5 mb-6 text-xs sm:text-sm text-gray-300">
                <span className="text-red-400 font-bold tracking-wider block mb-1">DISPATCH ERROR</span>
                <p>Failed to submitt your requirements. Please check your internet connection or email direct.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} id="contactForm" noValidate className="space-y-6">
              {/* Hidden honeypot spam-trap field */}
              <div className="opacity-0 absolute -left-[9999px] pointer-events-none" aria-hidden="true" tabIndex={-1}>
                <input
                  type="text"
                  name="company_website_trap"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-2 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, fullName: true }))}
                    className={`w-full bg-[#050505] border-b ${
                      touched.fullName && fullNameError ? "border-red-500" : "border-gray-700"
                    } text-sm text-[#e5e1e4] py-3 focus:outline-none focus:border-[#f6be39] transition-colors placeholder:text-gray-600`}
                    placeholder=""
                  />
                  {touched.fullName && fullNameError && (
                    <p className="text-red-400 text-xs mt-1.5 font-sans">{fullNameError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-2 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, phoneNumber: true }))}
                    className={`w-full bg-[#050505] border-b ${
                      touched.phoneNumber && phoneError ? "border-red-500" : "border-gray-700"
                    } text-sm text-[#e5e1e4] py-3 focus:outline-none focus:border-[#f6be39] transition-colors placeholder:text-gray-600`}
                    placeholder=""
                  />
                  {touched.phoneNumber && phoneError && (
                    <p className="text-red-400 text-xs mt-1.5 font-sans">{phoneError}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-2 font-bold">
                  Corporate Email
                </label>
                <input
                  type="email"
                  value={corporateEmail}
                  onChange={(e) => setCorporateEmail(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, corporateEmail: true }))}
                  className={`w-full bg-[#050505] border-b ${
                    touched.corporateEmail && emailError ? "border-red-500" : "border-gray-700"
                  } text-sm text-[#e5e1e4] py-3 focus:outline-none focus:border-[#f6be39] transition-colors placeholder:text-gray-600`}
                  placeholder=""
                />
                {touched.corporateEmail && emailError && (
                  <p className="text-red-400 text-xs mt-1.5 font-sans">{emailError}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-2 font-bold">
                  Product Requirement
                </label>
                <select
                  value={productRequirement}
                  onChange={(e) => setProductRequirement(e.target.value)}
                  className="w-full bg-[#050505] border-b border-gray-700 text-sm text-[#e5e1e4] py-3 focus:outline-none focus:border-[#f6be39] transition-colors cursor-pointer"
                >
                  <option value="">Select Category</option>
                  <option value="TMT Reinforcement Bars">TMT Rebars (Fe 500D / Fe 550D)</option>
                  <option value="Structural Beams & Columns">Structural Beams &amp; Columns</option>
                  <option value="Industrial Plates & Sheets">Industrial Plates &amp; Sheets</option>
                  <option value="Custom Fabrication">Custom Fabrication</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-2 font-bold">
                  Detailed Message
                </label>
                <textarea
                  rows={4}
                  value={detailedMessage}
                  onChange={(e) => setDetailedMessage(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, detailedMessage: true }))}
                  className={`w-full bg-[#050505] border-b ${
                    touched.detailedMessage && requirementError ? "border-red-500" : "border-gray-700"
                  } text-sm text-[#e5e1e4] py-3 focus:outline-none focus:border-[#f6be39] transition-colors resize-none placeholder:text-gray-600`}
                  placeholder="Describe your project specifications..."
                />
                {touched.detailedMessage && requirementError && (
                  <p className="text-red-400 text-xs mt-1.5 font-sans">{requirementError}</p>
                )}
              </div>

              <p className="text-gray-400 text-xs font-sans leading-relaxed">
                Your details are used only to reply to your enquiry and are stored securely.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d4a017] text-[#402d00] hover:bg-[#f6be39] font-sans font-bold text-xs tracking-wider uppercase py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md mt-4"
              >
                <span>{isSubmitting ? "Dispatching..." : "Dispatch Inquiry"}</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Structured Data for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Frequently Asked Questions Section */}
      <section className="mt-20 pt-12 border-t border-gray-800/80" aria-label="Frequently Asked Questions">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[#f6be39] font-mono text-xs tracking-widest uppercase font-bold">
            GOOD TO KNOW
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#e5e1e4] uppercase tracking-wide mt-1">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#15171C] border border-gray-800 rounded-xl overflow-hidden transition-all hover:border-[#f6be39]/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6be39]"
                >
                  <span className="font-sans font-medium text-sm sm:text-base text-[#e5e1e4] group-hover:text-[#f6be39] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-[#0d0e12] border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-[#f6be39]/50 transition-colors">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#f6be39]" />
                    ) : (
                      <Plus className="h-4 w-4 text-gray-400 group-hover:text-[#f6be39] transition-colors" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className="px-6 pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-gray-800/40 pt-4 font-sans"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have a question footer card */}
        <div className="mt-10 bg-[#15171C] p-6 sm:p-8 rounded-xl border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-sans font-bold text-base sm:text-lg text-[#e5e1e4]">
              Still have a question?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 font-sans">
              Our steel specialists are ready to help with custom specs, pricing, and rapid delivery.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={CONTACT_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-[#d4a017] text-[#402d00] hover:bg-[#f6be39] px-5 py-2.5 rounded-lg font-sans font-medium text-xs sm:text-sm transition-all hover:scale-95 active:opacity-80"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gray-700 bg-[#0d0e12] hover:border-[#f6be39] text-[#e5e1e4] hover:text-[#f6be39] px-5 py-2.5 rounded-lg font-sans font-medium text-xs sm:text-sm transition-all hover:scale-95 active:opacity-80"
            >
              <MessageSquare className="h-4 w-4 text-[#f6be39]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
