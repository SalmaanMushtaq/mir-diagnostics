import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
    }
  }, [open]);

  const drawer = (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-998 transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(3px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Slide-in drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-999 shadow-2xl transition-transform duration-300 ease-in-out"
        style={{
          width: "min(82vw, 300px)",
          background: "rgba(6, 60, 28, 0.5)",
          backdropFilter: "blur(20px)",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div>
            <div className="font-bold text-white text-lg">Mir Diagnostics</div>
            <div className="text-[10px] uppercase tracking-widest text-white/50">
              Medical Laboratory
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 bg-white/10 rounded-lg text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`p-3 rounded-xl transition-colors ${
                currentPath === link.href
                  ? "bg-white/20 text-white font-semibold"
                  : "text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{
          // backdropFilter: "blur(16px) saturate(180%)",
          // WebkitBackdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: scrolled ? "rgb(11 38 24)" : "transparent",
          borderBottom: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Mir Diagnostics
            </span>
          </a>

          {/* Desktop Links: Hidden on mobile, Flex on md+ */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-green-400 ${
                  currentPath === link.href
                    ? "text-white border-b-2 border-green-400"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-white text-emerald-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-green-100 transition-colors"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button: Visible only on mobile, hidden on md+ */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="cursor-pointer md:hidden p-2 text-white bg-white/10 rounded-lg border border-white/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
