import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    tag: "Advanced Diagnostics",
    title: "Precision Medicine Starts with Accurate Testing",
    subtitle:
      "State-of-the-art laboratory services delivering reliable results you can trust for better health outcomes.",
    cta: { label: "Explore Our Services", href: "/about" },
    cta2: { label: "Book a Test", href: "/contact" },
    gradientFrom: "#0D6B3A",
    gradientMid: "#16A34A",
    gradientTo: "#0D6B3A",
    accentColor: "#D4A017",
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="40" cy="40" r="30" strokeOpacity={0.3} />
        <path
          d="M28 52L34 34L40 44L46 38L52 52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="24" r="4" fill="currentColor" fillOpacity={0.5} />
        <path d="M22 40h4M54 40h4M40 22v4M40 54v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: "Ultrasound Services",
    title: "Advanced USG Imaging for Clear Diagnosis",
    subtitle:
      "High-definition ultrasound imaging performed by experienced radiologists using the latest Doppler technology.",
    cta: { label: "Learn About USG", href: "/usg" },
    cta2: { label: "Meet Our Doctors", href: "/doctors" },
    gradientFrom: "#064e24",
    gradientMid: "#16A34A",
    gradientTo: "#065f3c",
    accentColor: "#fde047",
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="20" y="28" width="40" height="28" rx="4" strokeOpacity={0.4} />
        <path
          d="M30 42 Q35 34 40 42 Q45 50 50 42"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="22" r="5" strokeOpacity={0.6} />
        <path d="M40 27v1" strokeLinecap="round" />
        <path d="M14 42h6M60 42h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: "Expert Team",
    title: "Trusted by Thousands of Patients in Kashmir",
    subtitle:
      "Our board-certified pathologists and radiologists bring decades of combined experience to every test and diagnosis.",
    cta: { label: "Our Doctors", href: "/doctors" },
    cta2: { label: "Contact Us", href: "/contact" },
    gradientFrom: "#052e16",
    gradientMid: "#0D6B3A",
    gradientTo: "#065f46",
    accentColor: "#D4A017",
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="32" cy="28" r="8" strokeOpacity={0.5} />
        <circle cx="52" cy="28" r="8" strokeOpacity={0.5} />
        <path
          d="M18 56c0-10 6-16 14-16M62 56c0-10-6-16-14-16"
          strokeLinecap="round"
        />
        <path d="M36 56c0-10 4-14 6-14s6 4 6 14" strokeLinecap="round" />
        <path d="M38 14l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback(
    (i: number) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
    const auto = setInterval(() => emblaApi.scrollNext(), 5500);
    return () => clearInterval(auto);
  }, [emblaApi]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, i) => (
            <div key={i} className="embla__slide h-full relative">
              {/* Background */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom right, ${slide.gradientFrom}, ${slide.gradientMid}, ${slide.gradientTo})`,
                }}
              />

              {/* Decorative circles */}
              <div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/10"
                style={{ animation: "pulse-slow 3s ease-in-out infinite" }}
              />
              <div
                className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-white/10"
                style={{
                  animation: "pulse-slow 3s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              />
              <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-white/5" />

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div
                      className="text-white"
                      style={{ animation: "fade-up 0.7s ease-out" }}
                    >
                      <span
                        className="text-sm tracking-widest uppercase mb-4 block"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: slide.accentColor,
                        }}
                      >
                        — {slide.tag}
                      </span>
                      <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {slide.title}
                      </h1>
                      <p className="text-white/75 text-lg mb-8 max-w-lg leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={slide.cta.href}
                          className="bg-white px-7 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-lg"
                          style={{ color: "var(--color-lab-green)" }}
                          onMouseEnter={(e) => {
                            (
                              e.currentTarget as HTMLElement
                            ).style.backgroundColor = "var(--color-lab-gold)";
                            (e.currentTarget as HTMLElement).style.color =
                              "white";
                          }}
                          onMouseLeave={(e) => {
                            (
                              e.currentTarget as HTMLElement
                            ).style.backgroundColor = "white";
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--color-lab-green)";
                          }}
                        >
                          {slide.cta.label}
                        </a>
                        <a
                          href={slide.cta2.href}
                          className="border-2 border-white/40 text-white px-7 py-3.5 rounded-lg font-medium hover:border-white hover:bg-white/10 transition-all duration-300"
                        >
                          {slide.cta2.label}
                        </a>
                      </div>
                    </div>

                    {/* Icon Graphic */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div
                        className="w-72 h-72 opacity-30"
                        style={{ color: slide.accentColor }}
                      >
                        {slide.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: current === i ? "2rem" : "0.625rem",
              height: "0.625rem",
              backgroundColor:
                current === i ? "white" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span
          className="text-xs tracking-widest rotate-90 origin-center mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          scroll
        </span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
}
