import { Page, Review } from "../types";
import { REVIEWS } from "../data";
import { Star, Shield, ArrowRight, CheckCircle2, Award, Zap, Handshake, ShieldCheck, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "../constants";

interface HomeViewProps {
  setActivePage: (page: Page) => void;
  setFilterCategory: (category: string) => void;
}

export default function HomeView({ setActivePage, setFilterCategory }: HomeViewProps) {
  const whyUs = [
    {
      icon: Award,
      title: "Quality Products",
      desc: "We sell only strong, good quality steel. If you need help choosing the right steel for your work, we will guide you.",
    },
    {
      icon: Shield,
      title: "Best Prices",
      desc: "We keep our prices fair and low. You get the best rate in Vadodara with no hidden charges. We buy directly from the makers, so we can pass the saving to you. The price we tell you is the price you pay.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "We process your order quickly. Our own vehicles deliver the steel on time at your site, so your work never stops. Call us, tell us what you need, and we will plan the delivery. Even big orders reach you without delay.",
    },
    {
      icon: Handshake,
      title: "Trusted Supplier",
      desc: "We are honest in everything we do. Many builders trust us and keep coming back to us for their steel. We keep our word on quality, price, and delivery time. We want to work with you for many years, not just one order.",
    },
  ];

  const portfolioCategories = [
    {
      id: "TMT Bars",
      name: "TMT REINFORCEMENT BARS",
      subtitle: "Grade 500D & 550D Superior Strength",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB90s-GWPhLRn6c-hZoAHJ7CFVHyiPobBtFmsfmjZK-fTiiOwq28ZpSQ8vojt_5kDZDU_LEnTva4-U1mYagqmd6jC5PIzj-XfVXFGDZILn5DHS0WycFx5QSykZ7kHXk7ByP1Bwpmbs3PfrnIWcZbaWzXqQXGVGJCQrgAFr8e108cu0xyGh5Qxd220Tx5BtryIfI4kTO7dMx6syk523GE64LpNkUEXZe5nkpXNDy2thL_L7tjv-0e3b-sn-8mtWTMtv1LjMzzSGktfjj",
    },
    {
      id: "Structural Steel",
      name: "STRUCTURAL I-BEAMS",
      subtitle: "Heavy Duty Beams & Joists",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwegsdcM8q9ojnk7VH0SWL-b6gae_Sdn8CZxpJEfBhGuRlVtAbtjphpacVQT7g7Y-vbgZ2SNASBfp2P-HpPJaMD_MIh8OBEl9siy5ohKpJqOoFzcKbwmWTqluoj_bbxUI-u0yxWVEfA03iqPcdjAVO6gBn7r94R8wQRDi0_O3D27H7XD7KDxAjORJ5llUGE1BKf68KuDRT1exn6p7mkbBp68nTvdmubLp2UeM1eZPymXGcx1CIyuBVWSPq5YDL69qj70G_q56QhoeF",
    },
    {
      id: "Pipes & Tubes",
      name: "MS HOLLOW SECTIONS",
      subtitle: "Square & Rectangular Tubes",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdEQYLykevASfvs5DVCZR8MeXW7ANg_fp7pRHOD1DfIlxJyB1DC2MqTLBY6XVMFBNxj8xAJRc6-OlR5hyJOtpgoPzf-woFF9vgmLCSkNCpgEg5FwAetDQ7-GUJZMz8n3zpFm3x5WsgRBY_SK_hE0m1REJd8qmCSABWRc2c0Ra1q05ykjjmvkBYzMKOcNzlj158qtkxpYSSS8JbKVjVpW5c32BQ5s4ge7qeJuh30uCzBbuzZN0sZScF619dwfFCIqmuYAQv2H9E5sLO",
    },
    {
      id: "Structural Steel",
      name: "ANGLES & CHANNELS",
      subtitle: "Industrial Grade Structural Sections",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Zl7IM2mOYllqhcd6NPt5spxg9F7JQesK14GlPkBwKWW36EpwpL90Gxg8jDw8RImL1Buf5PpgqeILM16u8ay2dhHW12Gqlu0V4QeT4AUm56Sh0gidwnO1U_u-tCgN51l9pwQ1T4VQiqxjgm8KXE9urrRoKg5PBqe6PkpR8NwJI8ka-v4F2s23ZjRybHVzV7OMO_0Nnr_HG3GVhdZtCj3saHrr26Ao-5VA3NonF-kCIDlHTlvV5xTiv76ltzWbBuFtnOJYoAfwU2R8",
    },
    {
      id: "Pipes & Tubes",
      name: "MS & GI PIPES",
      subtitle: "Seamless & ERW Solutions",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxaWn3AY-rPqW-kE2QQrvaaqVprPHXP1vMZe4C0WjB6WrNxM0XBT8Fvciv0EB8fg09ER4Dku9Tehx3_Jae2c0yeGJy8ndFmBF1m0KNeGtl-DaYr0DYkVrXeXAS6AW2bzreXD6KpGJ-nqthIaJA0IZKsvWRK6P1AEiPoDKHYNK4-w1-Hzu4trqnxqYrt52N_aMQNYZ6b4ugqBs9yhg5JII7PVj_-BicG_JrNChpEJQuesbYVqeXbb93Vj4Oz8myAkc2O_MvAlddGMYL",
    },
    {
      id: "Sheets",
      name: "STEEL SHEETS & PLATES",
      subtitle: "High-Grade Industrial Plates",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF8gWJjiT2Ms3pQjzF56K0l2dvRB7glPNqYg64TIJvTonabuxwQHp9B9EXKIlcXNXs6SFNCs160aGuaDqZX49Y7IkaLxjWbjAEefNqdvIgPQJtPd3Df7JYnyTv22rPFkhCVldyyQiavMy6nS6SnQyB3kEOQqzPJkOQdo5aWIqd-uN9AIiClDzJtnWoebAEOjbc99hx5P4xQapSxrYwLU8dQyHzU8ZT9Muf0CVanhK0jWG_MhA4pLMYDyPn6I2_j0p0ijMIpnkaiDgq",
    },
  ];

  const handleCategoryClick = (catId: string) => {
    setFilterCategory(catId);
    setActivePage("catalog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-[#e5e1e4] font-sans">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-35 grayscale brightness-75"
            alt="Industrial warehouse filled with high-grade steel beams"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_3qFPb3djsauZjW8f8XDXUWOrAaa7A968c2sc-WA6kGPA7eOYToVzFEOZcM7rzkplR0pf4GyyI5ofUTpAIbJeTRPFyCZZFtB_w4NluTGxl4i6PBTOrUhzeRz_i3JUE1tuhpY4qFIDCNXYh2ifvwtaM8SUlgSDgnoEf0JCP6perU397lFRTyyD0wzvw8iO3e9xTV3xWH193D3As5iywvNQZPrP7U5njJumcErMPd-OExWSPHX36iZnVN35YF2F5WRf3q05RVnObvCX"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-[#131315]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-center py-12">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f6be39]/10 border border-[#f6be39]/35 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck className="text-[#f6be39] h-4 w-4" />
            <span className="text-[#f6be39] font-mono text-[11px] sm:text-xs uppercase tracking-widest font-bold">
              Trusted by 500+ Builders in Vadodara
            </span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-7xl leading-tight text-[#e5e1e4] mb-6 uppercase tracking-tight">
            Trusted Iron &amp; Steel <br />
            <span className="text-[#f6be39] drop-shadow-sm">Supplier in Vadodara</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed mb-10">
            Providing Premium Quality Steel, TMT Bars, Structural Materials &amp; Fabrication Products at Competitive Prices.
          </p>

          {/* Core CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button
              onClick={() => setActivePage("contact")}
              className="w-full sm:w-auto bg-[#f6be39] text-[#131315] uppercase tracking-wider font-bold py-4 px-8 rounded-lg font-mono text-sm hover:translate-y-[-2px] transition-transform shadow-lg shadow-[#f6be39]/20 cursor-pointer"
            >
              Get Instant Quote
            </button>
            <a
              href={CONTACT_INFO.phoneTel}
              className="w-full sm:w-auto border border-gray-600 bg-[#1c1b1d]/50 backdrop-blur-md text-[#e5e1e4] uppercase tracking-wider font-bold py-4 px-8 rounded-lg font-mono text-sm hover:bg-[#39393b]/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-[#f6be39]" /> Call Now
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-[#4f4634]/30 pt-8">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <span className="text-[#f6be39] font-sans font-bold text-3xl">4.7</span>
                <div className="flex text-[#f6be39]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current stroke-none" />
                  ))}
                </div>
              </div>
              <span className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">Google Rating</span>
            </div>

            <div className="h-8 w-[1px] bg-gray-700 hidden sm:block"></div>

            <div className="text-center sm:text-left">
              <span className="block text-[#e5e1e4] font-sans font-bold text-lg leading-snug">Trusted Partner</span>
              <span className="block text-gray-400 font-mono text-[10px] uppercase tracking-widest">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT PREVIEW */}
      <section className="py-24 bg-[#0e0e10] border-t border-b border-[#4f4634]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#f6be39]/5 rounded-2xl blur-3xl group-hover:bg-[#f6be39]/10 transition-all"></div>
            <img
              className="relative rounded-xl border border-gray-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full"
              alt="Industrial steel fabrication close-up"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdtcIR_aJnaKbrCQz7rv8LGpwXbd3UUYkPqX738-NK5uCNHy_zlFvdAZGCvv6dk4AyGrczfX5dUehjttEANhL589QUCq2eIIBG_rC6jEY7ft4pRHe3czRwD46msLJXdfo_6NU9rdyEI5ekAq9H29HN3cuO0SzakWNPeV3eqANysvyfnUAEWM-8BHnySJa1C6kyFqaElIfTGsGjMu-5nBHJTPbxhLFZrqLFCopFhvDVq-MKshSjvI2WSAwnRmsECfheJnJ9-9CGn65"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#15171C] border border-[#f6be39]/30 p-6 md:p-8 rounded-xl hidden lg:block shadow-2xl">
              <span className="block font-sans font-extrabold text-4xl text-[#f6be39]">13+</span>
              <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                Years of Excellence
              </span>
            </div>
          </div>

          <div>
            <span className="text-[#f6be39] font-mono text-xs uppercase tracking-[0.3em] block mb-4 font-bold">
              Local Leadership
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#e5e1e4] mb-6 leading-tight uppercase">
              Building Strength Through <span className="text-[#f6be39]">Quality Steel</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Since we started, <span className="text-brand-gold font-bold">Shree Tirupati Balaji &amp; Sons</span> has been a trusted name in Vadodara's building work. We don't just sell steel. We give strong, good quality steel that builders and architects have trusted for many years.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f6be39] h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[#e5e1e4]">Certified Grade</p>
                  <p className="text-xs text-gray-400 mt-1">IS Standards Compliant</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f6be39] h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[#e5e1e4]">Direct Sourcing</p>
                  <p className="text-xs text-gray-400 mt-1">Ensuring Best Pricing</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActivePage("about")}
              className="inline-flex items-center gap-2 text-[#f6be39] hover:text-white font-mono text-sm uppercase tracking-wider font-bold transition-colors cursor-pointer group"
            >
              <span>Our Story</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-24 bg-[#131315]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#e5e1e4] uppercase tracking-wide">
              Why Industry Leaders <span className="text-[#f6be39]">Choose Us</span>
            </h2>
            <div className="w-20 h-1 bg-[#f6be39] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#15171C] p-8 rounded-xl border border-gray-800 hover:border-[#f6be39]/40 transition-all duration-300 group shadow-md flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#f6be39] h-6 w-6" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-[#e5e1e4] mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT CATEGORIES */}
      <section className="py-24 bg-[#0e0e10] border-t border-b border-[#4f4634]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#f6be39] font-mono text-xs uppercase tracking-[0.3em] block mb-2 font-bold">
                Commercial Catalog
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#e5e1e4] uppercase tracking-wide">
                Our <span className="text-[#f6be39]">Steel Portfolio</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Precision engineered structural materials for elite construction projects.
              </p>
            </div>
            <button
              onClick={() => {
                setFilterCategory("All");
                setActivePage("catalog");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-[#201f21] border border-gray-700 px-6 py-3 rounded-lg text-[#e5e1e4] hover:bg-[#f6be39] hover:text-[#131315] uppercase tracking-wider font-mono text-xs font-bold transition-all shrink-0 cursor-pointer"
            >
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCategories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => handleCategoryClick(cat.id)}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-gray-800 cursor-pointer shadow-lg"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-75"
                  alt={cat.name}
                  src={cat.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-sans font-bold text-lg text-[#e5e1e4] mb-2">{cat.name}</h4>
                  <p className="text-xs text-[#f6be39] uppercase font-mono tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS SLIDER PREVIEW */}
      <section className="py-24 bg-[#131315]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 overflow-hidden">
          <div className="text-center mb-16">
            <span className="text-[#f6be39] font-mono text-xs uppercase tracking-[0.3em] block mb-2 font-bold">
              Voices of Industry
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#e5e1e4] uppercase">
              Voices of <span className="text-[#f6be39]">Trust</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Partnering with the biggest players in state-wide construction and infrastructure.
            </p>
          </div>

          {/* Scrolling Reviews list */}
          <div className="flex gap-6 overflow-x-auto pb-8 custom-scrollbar scroll-smooth">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="min-w-[280px] sm:min-w-[350px] bg-[#15171C] p-6 sm:p-8 rounded-xl border border-gray-800 flex flex-col gap-4 shadow-xl shrink-0"
              >
                <div className="flex justify-between items-center text-[#f6be39]">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">{rev.meta}</span>
                </div>
                <p className="text-gray-300 font-sans italic text-xs sm:text-sm leading-relaxed flex-1">
                  "{rev.text}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-800">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 border border-[#f6be39]/30 flex items-center justify-center font-sans font-bold text-[#f6be39] text-xs">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-[#f6be39] font-sans font-bold text-xs uppercase">
                      {rev.author}
                    </span>
                    <span className="block text-gray-400 text-[10px] uppercase font-mono tracking-widest leading-none mt-1">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => {
                setActivePage("testimonials");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-[#f6be39] hover:text-white font-mono text-sm uppercase tracking-wider font-bold transition-all group"
            >
              <span>View More Reviews</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-24 bg-[#0e0e10] border-t border-[#4f4634]/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f6be39] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <div className="bg-[#15171C] p-8 md:p-16 rounded-2xl border border-gray-800 text-center shadow-2xl">
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#e5e1e4] mb-6 uppercase tracking-wide leading-tight">
              Looking for <span className="text-[#f6be39]">Quality Steel Products?</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-xs sm:text-sm leading-relaxed mb-10">
              Connect with our technical sales team for customized quotes, bulk order discounts, and rapid delivery schedules. Let's build something indestructible together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={() => setActivePage("contact")}
                className="w-full sm:w-auto bg-[#f6be39] text-[#131315] uppercase tracking-wider font-bold py-4 px-8 rounded-lg font-mono text-xs hover:scale-105 transition-all cursor-pointer shadow-md"
              >
                Get Quote
              </button>
              <a
                href={CONTACT_INFO.phoneTel}
                className="w-full sm:w-auto border border-gray-600 hover:bg-[#39393b]/10 text-white uppercase tracking-wider font-bold py-4 px-8 rounded-lg font-mono text-xs hover:border-[#f6be39] transition-all flex items-center justify-center gap-2"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
