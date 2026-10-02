import { useState } from "react";
import { Page } from "../types";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
}

export default function Header({ activePage, setActivePage, onOpenQuote }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "catalog", label: "PRODUCTS" },
    { id: "about", label: "COMPANY" },
    { id: "testimonials", label: "REVIEWS" },
    { id: "contact", label: "CONTACT" },
  ] as const;

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    setIsMenuOpen(false);
    onOpenQuote();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131315]/95 backdrop-blur-xl border-b border-[#4f4634] shadow-sm">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-3 sm:py-4 h-16 sm:h-20">
        {/* Logo and Name */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group shrink-0 min-w-0"
        >
          <div className="h-[40px] sm:h-[48px] w-auto overflow-hidden rounded-[4px] bg-white border border-[#4f4634] group-hover:border-[#f6be39] transition-colors flex items-center justify-center shrink-0 p-0.5">
            <img
              src="/images/stb.jpeg"
              alt="Shree Tirupati Balaji & Sons logo"
              className="brand-logo-img"
            />
          </div>
          <div className="flex flex-col font-sans font-bold text-brand-gold text-[13px] sm:text-[14px] md:text-[16px] leading-tight tracking-wide min-w-0">
            <span className="whitespace-nowrap">SHREE TIRUPATI BALAJI</span>
            <span className="whitespace-nowrap">&amp; SONS</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans font-medium text-sm tracking-wider transition-all duration-300 relative py-1 focus:outline-none ${
                  isActive
                    ? "text-[#f6be39] border-b-2 border-[#f6be39]"
                    : "text-gray-400 hover:text-[#f6be39]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="bg-[#d4a017] text-[#402d00] hover:bg-[#f6be39] px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-sans font-medium text-xs sm:text-sm hover:scale-95 active:opacity-80 transition-all cursor-pointer shadow-sm"
          >
            GET QUOTE
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-[#f6be39] focus:outline-none focus:ring-2 focus:ring-[#f6be39]/50 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#f6be39]" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-[#131315]/98 backdrop-blur-xl border-b border-[#4f4634] shadow-2xl max-h-[calc(100vh-4rem-64px)] overflow-y-auto">
          <div className="px-6 py-4 flex flex-col divide-y divide-[#4f4634]/30">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full min-h-[48px] h-12 flex items-center justify-between font-sans text-sm font-semibold tracking-wider text-left transition-colors cursor-pointer ${
                    isActive
                      ? "text-[#f6be39] border-b-2 border-b-[#f6be39]"
                      : "text-gray-300 hover:text-[#f6be39]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f6be39]"></span>
                  )}
                </button>
              );
            })}

            {/* Mobile Menu Full-Width GET QUOTE Button */}
            <div className="pt-4 pb-2 border-t-0">
              <button
                onClick={handleQuoteClick}
                className="w-full h-12 bg-[#d4a017] text-[#402d00] hover:bg-[#f6be39] font-sans font-bold text-sm tracking-wider uppercase rounded-lg transition-all active:scale-95 shadow-md flex items-center justify-center cursor-pointer"
              >
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
