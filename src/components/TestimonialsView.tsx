import { Page } from "../types";
import { REVIEWS } from "../data";
import { Star, ShieldCheck, HelpCircle } from "lucide-react";

interface TestimonialsViewProps {
  setActivePage: (page: Page) => void;
}

export default function TestimonialsView({ setActivePage }: TestimonialsViewProps) {
  return (
    <div className="text-[#e5e1e4] font-sans pb-24">
      {/* Hero Header bar */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center text-center px-6 md:px-16 overflow-hidden border-b border-gray-800/40 pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131315]/80 to-[#131315]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mt-8">
          <span className="text-[#f6be39] font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold">
            Voices of Industry
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-wider mb-6">
            VOICES OF TRUST
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            For many years, <span className="text-brand-gold font-bold">SHREE TIRUPATI BALAJI &amp; SONS</span> has delivered good quality steel. People trust us because we keep our word and take care of our customers. Read what our customers have to say.
          </p>
        </div>
      </section>

      {/* Grid of Testimonials */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#15171C] p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-[#f6be39]/40 hover:shadow-[0_0_20px_rgba(246,190,57,0.05)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Meta */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <h3 className="font-sans font-bold text-base text-[#f6be39] uppercase">
                      {rev.author}
                    </h3>
                    <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider mt-1 block">
                      {rev.meta}
                    </span>
                  </div>
                  <div className="flex text-[#f6be39] mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current stroke-none" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 italic text-xs sm:text-sm leading-relaxed pt-2">
                  "{rev.text}"
                </p>
              </div>

              {/* Verified badge */}
              <div className="mt-8 pt-4 border-t border-gray-800/40 flex items-center justify-between">
                <span className="text-[10px] font-mono font-medium text-gray-500 uppercase tracking-widest">
                  {rev.role}
                </span>
                <div className="flex items-center gap-1.5 text-[#f6be39]/80 text-[10px] font-mono font-semibold uppercase">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box (Ready to Build?) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="bg-[#201f21] rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between border border-gray-800 shadow-xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="font-sans font-bold text-lg sm:text-xl text-[#e5e1e4] mb-2 tracking-wide">
              READY TO BUILD?
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Experience the industry standard in steel supply and fabrication.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={() => setActivePage("contact")}
              className="bg-[#f6be39] text-[#131315] uppercase tracking-wider font-mono font-bold text-xs px-8 py-3.5 rounded-lg hover:brightness-110 active:scale-95 transition-all text-center cursor-pointer"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => setActivePage("catalog")}
              className="border border-gray-700 text-white uppercase tracking-wider font-mono text-xs px-8 py-3.5 rounded-lg hover:bg-gray-800 transition-all text-center cursor-pointer"
            >
              View Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
