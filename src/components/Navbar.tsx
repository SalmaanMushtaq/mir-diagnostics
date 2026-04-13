import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Plus, Menu } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

const normalizePath = (path: string) => {
  if (!path) return "/";
  const cleaned = path.replace(/\/+$/, "");
  return cleaned || "/";
};

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const activePath = normalizePath(currentPath);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      menuBtnRef.current?.focus();
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const drawer = (
    <>
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className="fixed inset-0 z-998 transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(3px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className="fixed top-0 right-0 bottom-0 z-999 shadow-2xl transition-transform duration-300 ease-in-out"
        style={{
          width: "min(82vw, 300px)",
          background: "rgb(6, 60, 28)",
          backdropFilter: "blur(20px)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          visibility: open ? "visible" : "hidden",
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
            ref={closeBtnRef}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 bg-white/10 rounded-lg cursor-pointer text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Plus className="w-6 h-6 rotate-45" />
          </button>
        </div>

        <nav aria-label="Mobile Menu Links" className="p-4 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = activePath === normalizePath(link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`p-3 rounded-xl transition-colors link-underline ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "text-white/70"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "rgb(11 38 24)" : "transparent",
          borderBottom: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Mir Diagnostics Home"
          >
            <div
              className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center border border-white/30"
              aria-hidden="true"
            >
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Mir Diagnostics
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            <ul className="flex items-center gap-8 list-none">
              {links.map((link) => {
                const isActive = activePath === normalizePath(link.href);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-base font-medium transition-colors link-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-[1px] ${
                        isActive ? "text-white nav-link-active" : "text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="/contact"
              className="bg-white text-emerald-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-green-100 focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            ref={menuBtnRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
            className="md:hidden cursor-pointer p-1.5 text-white bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 focus:ring-2 focus:ring-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
