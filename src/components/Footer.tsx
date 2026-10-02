import { Page } from "../types";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "../constants";

interface FooterProps {
  setActivePage: (page: Page) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  return (
    <footer className="bg-[#0e0e10] text-[#e5e1e4] border-t border-[#4f4634] pt-16 pb-28 md:pb-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1fr] gap-8 lg:gap-x-12 mb-12">
          {/* Company Brief & Branding */}
          <div className="space-y-4 min-w-0">
            <button
              onClick={() => setActivePage("home")}
              className="flex items-center gap-3 text-left focus:outline-none group max-w-full"
            >
              <div className="h-[48px] w-auto overflow-hidden rounded-[4px] bg-white border border-[#4f4634] group-hover:border-[#f6be39] transition-colors flex items-center justify-center shrink-0 p-0.5">
                <img
                  src="/images/stb.jpeg"
                  alt="Shree Tirupati Balaji & Sons logo"
                  className="brand-logo-img"
                />
              </div>
              <div className="flex flex-col font-sans font-bold text-brand-gold text-[15px] sm:text-[16px] lg:text-[17px] leading-snug tracking-wide min-w-0 max-w-full break-words">
                <span>SHREE TIRUPATI BALAJI</span>
                <span>&amp; SONS</span>
              </div>
            </button>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Steel supplier in Vadodara since 2011. We supply TMT bars, beams, and other structural steel for building work.
            </p>
            <div className="flex items-center gap-2 text-[#f6be39] font-mono text-xs">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span className="truncate">GST: 24ABWFS0493A1Z3</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-mono text-[11px]">
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 min-w-0">
            <h4 className="font-sans text-xs tracking-widest text-[#f6be39] uppercase border-b border-[#4f4634]/50 pb-2 font-bold select-none">
              CONTACT
            </h4>
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 text-[#f6be39] mt-0.5 shrink-0" />
                <div className="text-gray-400">
                  <p className="text-[#e5e1e4] font-semibold">{CONTACT_INFO.contactPerson}</p>
                  <a href={CONTACT_INFO.phoneTel} className="whitespace-nowrap hover:text-[#f6be39] transition-colors block">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#f6be39] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-[#f6be39] transition-colors whitespace-nowrap text-[11px] sm:text-xs"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Location Area */}
          <div className="space-y-4 min-w-0">
            <h4 className="font-sans text-xs tracking-widest text-[#f6be39] uppercase border-b border-[#4f4634]/50 pb-2 font-bold select-none">
              LOCATION
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#f6be39] shrink-0 mt-0.5" />
              <div className="text-gray-400 space-y-2">
                <p className="leading-relaxed">
                  B/11, Sabji Mandi Road, Abhay Nagar, Gorwa, Vadodara, Gujarat - 390016
                </p>
                <a
                  href="https://maps.app.goo.gl/yBmEYYpq4D4e1tSu7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f6be39] font-bold hover:underline inline-block mt-1 font-sans text-xs tracking-wider"
                >
                  VIEW ON MAPS →
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4 min-w-0">
            <h4 className="font-sans text-xs tracking-widest text-[#f6be39] uppercase border-b border-[#4f4634]/50 pb-2 font-bold select-none">
              HOURS
            </h4>
            <div className="space-y-2.5 font-sans">
              <div className="hours-row py-1 border-b border-[#2d3138]/35">
                <span className="hours-day">Mon – Sat</span>
                <span className="hours-time">9:00 AM – 6:00 PM</span>
              </div>
              <div className="hours-row py-1">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">9:00 AM – 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Bottom Copyright */}
        <div className="pt-8 border-t border-[#4f4634]/60 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-sans text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-medium">
            <p>© {new Date().getFullYear()} <span className="text-brand-gold font-bold">SHREE TIRUPATI BALAJI &amp; SONS</span>. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <span>Vadodara, Gujarat</span>
            </div>
          </div>
          <p className="text-center sm:text-left font-sans text-[11px] text-gray-500 leading-relaxed">
            This is the official website of Shree Tirupati Balaji &amp; Sons. Copying our content, logo, or photos without written permission is not allowed and may lead to legal action.
          </p>
        </div>
      </div>
    </footer>
  );
}
