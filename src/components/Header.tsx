import { Page } from "../types";

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
}

export default function Header({ activePage, setActivePage, onOpenQuote }: HeaderProps) {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "catalog", label: "PRODUCTS" },
    { id: "about", label: "COMPANY" },
    { id: "testimonials", label: "REVIEWS" },
    { id: "contact", label: "CONTACT" },
  ] as const;

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131315]/80 backdrop-blur-xl border-b border-[#4f4634] shadow-sm h-16 sm:h-20 flex items-center">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-16 py-4">
        {/* Logo and Name */}
        <button
          onClick={() => setActivePage("home")}
          className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
        >
          <div className="h-[48px] w-auto overflow-hidden rounded-[4px] bg-white border border-[#4f4634] group-hover:border-[#f6be39] transition-colors flex items-center justify-center shrink-0 p-0.5">
            <img
              src="/images/stb.jpeg"
              alt="Shree Tirupati Balaji & Sons logo"
              className="brand-logo-img"
            />
          </div>
          <div className="flex flex-col brand-title">
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
                onClick={() => setActivePage(item.id)}
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

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="bg-[#d4a017] text-[#402d00] hover:bg-[#f6be39] px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-sans font-medium text-xs sm:text-sm hover:scale-95 active:opacity-80 transition-all cursor-pointer shadow-sm"
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </header>
  );
}
