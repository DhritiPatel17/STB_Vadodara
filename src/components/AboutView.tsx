import { Award, Eye, Rocket, HelpCircle, HardHat, TrendingUp } from "lucide-react";

export default function AboutView() {
  return (
    <div className="text-[#e5e1e4] font-sans">
      {/* Banner Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-35 brightness-50"
            alt="Steel factory close-up dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUsVTogZOpNt6Vp3VF6CDjYX9C0jjeuUntVl54u_pCV_RpXlBNeW8zSQ2ZyAavZjJpn3VFiNVv1_rn4xEYCgwclndzR6KJBTSfoTDee1dsrhfeCdLd7L3OTGr-AEkSqqZMvrpEDkDDF9OJDHmmeFrQuiJNRC_HpPycJZ7joaGDpWTt4E8JZXIXoFyS8jIpLSAwpbIiDzNOHEir09eVMyAs_Nm8a4mpFCqFiZI4rIv77Abtc6owz70vRWBexi-NRPWdzMhvZFJh9BnM"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131315]/70 to-[#131315]"></div>
        </div>

        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto w-full py-16">
          <span className="text-[#f6be39] font-mono text-xs uppercase tracking-[0.4em] block mb-4 font-bold select-none">
            WHO ARE WE ??
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-7xl text-[#f6be39] mb-4 leading-none uppercase">
            ARCHITECTS OF<br />
            INDUSTRIAL STRENGTH
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-xl border-l-[3px] border-[#f6be39] pl-6 leading-relaxed">
            Since 2011, <span className="text-brand-gold font-bold">Shree Tirupati Balaji &amp; Sons</span> has supplied strong, genuine steel to builders across Gujarat. Our promise is simple: good quality steel, a fair price, and delivery on time.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0e0e10] py-24 relative overflow-hidden border-t border-b border-[#4f4634]/30">
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision card */}
          <div className="bg-[#15171C]/90 p-8 sm:p-10 rounded-xl border border-gray-800 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-[#f6be39]/10 border border-[#f6be39]/30 rounded-lg flex items-center justify-center">
              <Eye className="text-[#f6be39] h-6 w-6" />
            </div>
            <h3 className="font-sans font-bold text-[#f6be39] text-base sm:text-lg uppercase tracking-wider">
              OUR VISION
            </h3>
            <p className="text-gray-300 italic text-xs sm:text-sm leading-relaxed">
              "Our vision is to earn the trust of our customers. We want every builder to feel sure when they buy steel from <span className="text-brand-gold font-bold">Shree Tirupati Balaji &amp; Sons</span>."
            </p>
          </div>

          {/* Mission card */}
          <div className="bg-[#15171C]/90 p-8 sm:p-10 rounded-xl border border-gray-800 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-[#f6be39]/10 border border-[#f6be39]/30 rounded-lg flex items-center justify-center">
              <Rocket className="text-[#f6be39] h-6 w-6" />
            </div>
            <h3 className="font-sans font-bold text-[#f6be39] text-base sm:text-lg uppercase tracking-wider">
              OUR MISSION
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              "To supply good quality steel at a fair price and deliver it on time. We keep our weights and bills clear, so our customers always know what they are paying for. Our aim is steel that keeps every building safe for many years."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-center mb-16 uppercase tracking-wider">
          CORE VALUES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1c1b1d] p-8 text-center rounded-xl border border-gray-800 hover:border-[#f6be39]/55 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all">
              <span className="font-sans font-bold text-xs text-[#f6be39] uppercase">QLTY</span>
            </div>
            <h4 className="font-sans font-semibold text-base mb-4 tracking-wide uppercase text-white">
              QUALITY
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We supply steel that follows Indian (IS) standards. Every piece is checked so you get strong, genuine material.
            </p>
          </div>

          <div className="bg-[#1c1b1d] p-8 text-center rounded-xl border border-gray-800 hover:border-[#f6be39]/55 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all">
              <span className="font-sans font-bold text-xs text-[#f6be39] uppercase">TRST</span>
            </div>
            <h4 className="font-sans font-semibold text-base mb-4 tracking-wide uppercase text-white">
              TRUST
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We are clear about price, weight, and delivery date. We do what we say, and we keep our word to every customer.
            </p>
          </div>

          <div className="bg-[#1c1b1d] p-8 text-center rounded-xl border border-gray-800 hover:border-[#f6be39]/55 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all">
              <span className="font-sans font-bold text-xs text-[#f6be39] uppercase">RLBL</span>
            </div>
            <h4 className="font-sans font-semibold text-base mb-4 tracking-wide uppercase text-white">
              RELIABILITY
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We deliver on time and respond quickly when you call. Our work is steady and dependable, order after order.
            </p>
          </div>
        </div>
      </section>

      {/* Business Strengths bento box */}
      <section className="py-24 border-t border-[#4f4634]/30 bg-[#0e0e10] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#e5e1e4] mb-12 uppercase tracking-wide">
            BUSINESS STRENGTHS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Bento card 1: Reliable Delivery */}
            <div className="md:col-span-2 md:row-span-2 bg-[#1c1b1d] relative overflow-hidden rounded-xl border border-gray-800 min-h-[300px] group shadow-inner">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700 brightness-75 grayscale group-hover:grayscale-0"
                alt="Automated steel distribution warehouse"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNCudePUWrL_DFpdCPg_uHh1AVYxG_pgtv7mzIuxl4bclCF2eW5ab2ePuJdTVqEsR28f3srAqdx8fje_flCsqC3lkUUoss-jyiZBvX_PmOflBdgVU8cGmRFtCxvQC7CmzghTxQnvu4OKDJVivoFHF7jmYS429y68Du3r8G6i9r5MZ4un_kNSCZkwdL5D5nypFsKjDs8VZumH4jp2RdCnNLqtUUJlIn3zVP2TldzWhpnpvjmpZOcReHK9yOaH97lqBMFeB7sfjYS0AM"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="font-sans font-bold text-lg text-[#f6be39] mb-2 uppercase">
                  RELIABLE DELIVERY
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm max-w-sm leading-relaxed">
                  We plan every delivery in advance. Your steel reaches your site on the agreed date, so your work does not get delayed.
                </p>
              </div>
            </div>

            {/* Bento card 2: Fair Prices */}
            <div className="md:col-span-2 bg-[#201f21] p-8 flex items-start gap-5 rounded-xl border border-gray-800 hover:border-[#f6be39]/20 transition-colors">
              <TrendingUp className="text-[#f6be39] h-8 w-8 shrink-0 mt-1" />
              <div>
                <h4 className="font-sans font-semibold text-sm sm:text-base text-white tracking-wide uppercase">
                  FAIR PRICES
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  We buy steel at the right time and at the right rate, and we pass that rate on to you. We never lower the steel quality to reduce the price.
                </p>
              </div>
            </div>

            {/* Bento card 3: Customer Support */}
            <div className="md:col-span-2 bg-[#15171C] p-8 border-t-[4px] border-[#f6be39] rounded-xl border border-gray-800">
              <h4 className="font-sans font-bold text-[#f6be39] text-xs sm:text-sm mb-2 uppercase tracking-wider">
                CUSTOMER SUPPORT
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Call us during working hours. We help you choose the right grade of steel and handle any change in your order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
