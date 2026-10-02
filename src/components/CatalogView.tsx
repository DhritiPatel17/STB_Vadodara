import { useState, useMemo, FormEvent } from "react";
import { Product, Page } from "../types";
import { PRODUCTS } from "../data";
import { Search, Send, CheckCircle2, ArrowRight } from "lucide-react";

interface CatalogViewProps {
  setActivePage: (page: Page) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  onSubmitEnquiry: (fullName: string, phoneNumber: string, corporateEmail: string, requirement: string, message: string) => Promise<boolean>;
}

export default function CatalogView({
  setActivePage,
  filterCategory,
  setFilterCategory,
  onSubmitEnquiry,
}: CatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Instant Dialog Overlay state for direct enquiry on a product
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enqName, setEnqName] = useState("");
  const [enqPhone, setEnqPhone] = useState("");
  const [enqEmail, setEnqEmail] = useState("");
  const [enqMessage, setEnqMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const categories = ["All", "TMT Bars", "Structural Steel", "Pipes & Tubes", "Sheets"] as const;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = filterCategory === "All" || p.category === filterCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [filterCategory, searchQuery]);

  const handleOpenEnquiryModal = (product: Product) => {
    setSelectedProduct(product);
    setEnqName("");
    setEnqPhone("");
    setEnqEmail("");
    setEnqMessage(`Interested in getting quotes for "${product.name}". Please provide compliance certifications and minimum order quantities.`);
    setSuccessMsg(false);
  };

  const handleInstantSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!enqName || !enqPhone || !enqEmail || !selectedProduct) return;
    setIsSubmitting(true);
    
    const outcome = await onSubmitEnquiry(
      enqName,
      enqPhone,
      enqEmail,
      selectedProduct.name,
      enqMessage
    );

    setIsSubmitting(false);
    if (outcome) {
      setSuccessMsg(true);
      setTimeout(() => {
        setSelectedProduct(null);
        setSuccessMsg(false);
      }, 2500);
    }
  };

  return (
    <div className="text-[#e5e1e4] font-sans pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Title block */}
      <section className="mb-10 mt-12">
        <span className="text-[#f6be39] font-mono text-xs uppercase tracking-[0.3em] block mb-2 font-bold">
          STEEL FOR EVERY BUILD
        </span>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#e5e1e4] uppercase tracking-wide">
          OUR PRODUCTS
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl">
          Browse our range of steel for building work. We supply TMT bars, beams, and other structural steel that follow Indian (IS) standards.
        </p>
      </section>

      {/* Search & Filter Cluster */}
      <div className="space-y-6 mb-12">
        {/* Search Input bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#050505] border-0 border-b border-gray-700 py-4 pl-12 pr-4 text-[#e5e1e4] focus:ring-0 focus:border-[#f6be39] transition-all placeholder:text-gray-500 font-sans text-sm focus:outline-none"
            placeholder="Search TMT, Beams, or Grades..."
          />
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = filterCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full font-mono text-xs tracking-wider font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#d4a017] text-[#402d00]"
                    : "border border-gray-700 text-gray-400 hover:border-[#f6be39] hover:text-[#f6be39]"
                }`}
              >
                {cat === "All" ? "All Products" : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product List Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-[#15171C] border border-gray-800 rounded-xl p-4 flex flex-col group transition-all duration-300 hover:border-[#f6be39]/40 hover:shadow-[0_0_20px_rgba(246,190,57,0.05)]"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-5 border border-gray-800/50">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:scale-105"
                  alt={p.name}
                  src={p.image}
                />
              </div>

              <h3 className="font-sans font-bold text-base text-[#e5e1e4] mb-2 uppercase tracking-wide">
                {p.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              {/* Technical Spec Box */}
              <div className="bg-[#1c1b1d]/85 p-3 rounded border border-gray-800 mb-6 mt-auto">
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#f6be39] font-bold">
                  Technical Specifications
                </span>
                <span className="block font-sans text-xs text-gray-300 mt-1">{p.specs}</span>
              </div>

              <button
                onClick={() => handleOpenEnquiryModal(p)}
                className="w-full bg-[#f6be39] text-[#131315] uppercase tracking-wider font-mono font-bold py-3 text-xs rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Send Enquiry</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#15171C] rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">No industrial items matching your request.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setFilterCategory("All");
            }}
            className="text-[#f6be39] font-mono text-xs uppercase mt-3 hover:underline"
          >
            Clear Filter &amp; Search
          </button>
        </div>
      )}

      {/* Custom & Bulk orders details */}
      <section className="mt-16 p-8 border-l-4 border-[#f6be39] bg-[#1c1b1d] rounded-lg shadow-md">
        <h3 className="font-sans font-bold text-[#f6be39] text-lg mb-2 uppercase tracking-wide">
          Custom &amp; Bulk Orders
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
          We fulfill customized material specifications, industrial profile requirements, and bulk orders compliant with Indian Standard regulations (Fe 500D, IS 1239, IS 2062). Direct prompt dispatch across Vadodara.
        </p>
        <button
          onClick={() => {
            setActivePage("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-1.5 text-[#f6be39] font-mono text-xs uppercase tracking-wider font-bold hover:underline cursor-pointer group"
        >
          <span>Request Custom Quotation</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </section>

      {/* INSTANT PRODUCT ENQUIRY DIALOG OVERLAY */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#15171C] border border-gray-800 p-6 sm:p-8 rounded-2xl max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white font-sans text-lg focus:outline-none"
            >
              ✕
            </button>

            <span className="text-[#f6be39] font-mono text-[10px] tracking-widest uppercase font-bold">
              Direct Enquiry
            </span>
            <h3 className="font-sans font-bold text-lg text-white uppercase tracking-wide mt-1 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-400 text-xs mb-6">
              Establish high-stakes contact with our sales engineers for priority custom dispatch.
            </p>

            {successMsg ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-emerald-900/40 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-white font-sans font-bold text-sm">ENQUIRY TRANSMITTED</h4>
                <p className="text-gray-400 text-xs">
                  Your project requirements were saved successfully in our system!
                </p>
              </div>
            ) : (
              <form onSubmit={handleInstantSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-1 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={enqName}
                    onChange={(e) => setEnqName(e.target.value)}
                    className="w-full bg-[#050505] border-b border-gray-700 text-sm text-white py-2 focus:border-[#f6be39] focus:outline-none transition-colors"
                    placeholder="e.g. John Builders"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-1 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={enqPhone}
                    onChange={(e) => setEnqPhone(e.target.value)}
                    className="w-full bg-[#050505] border-b border-gray-700 text-sm text-white py-2 focus:border-[#f6be39] focus:outline-none transition-colors"
                    placeholder="e.g. +91 99000 00000"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-1 font-bold">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={enqEmail}
                    onChange={(e) => setEnqEmail(e.target.value)}
                    className="w-full bg-[#050505] border-b border-gray-700 text-sm text-white py-2 focus:border-[#f6be39] focus:outline-none transition-colors"
                    placeholder="e.g. procurement@company.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-mono text-[#f6be39] mb-1 font-bold">
                    Requirement specifications
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={enqMessage}
                    onChange={(e) => setEnqMessage(e.target.value)}
                    className="w-full bg-[#050505] border-b border-gray-700 text-sm text-white py-2 focus:border-[#f6be39] focus:outline-none transition-colors resize-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f6be39] text-[#131315] uppercase tracking-wider font-mono font-bold py-3 text-xs rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? "Dispatching..." : "Dispatch Priority Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
