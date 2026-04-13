import {
  MapPin,
  Phone,
  Mail,
  Clock,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgb(11 38 24)",
        borderTop: "1px solid rgba(255, 255, 255, 0.125)",
        color: "white",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <section className="lg:col-span-2" aria-labelledby="footer-brand">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                aria-hidden="true"
              >
                <FlaskConical className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h2
                  id="footer-brand"
                  className="font-bold text-xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Mir Diagnostics
                </h2>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  Medical Laboratory
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Providing world-class diagnostic services to the people of Kashmir
              and beyond. Accuracy, care, and trust — since our founding.
            </p>
          </section>

          {/* Navigation Section */}
          <nav className="flex flex-col" aria-labelledby="footer-links-heading">
            <h3
              id="footer-links-heading"
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/doctors", label: "Our Doctors" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group text-sm link-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-[1px] flex items-center gap-1"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <section aria-labelledby="footer-contact-heading">
            <h3
              id="footer-contact-heading"
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "Main Chowk, Pampore, J&K — 192121",
                  srLabel: "Location:",
                },
                {
                  icon: Phone,
                  text: "+91 7006087182",
                  srLabel: "Phone:",
                },
                {
                  icon: Mail,
                  text: "mirdiagnowtics256@gmail.com",
                  srLabel: "Email:",
                },
                {
                  icon: Clock,
                  text: "Mon–Sat: 7 AM – 8 PM\nSun: 8 AM – 2 PM",
                  srLabel: "Hours:",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={2}
                      className="w-4 h-4 mt-0.5 shrink-0 text-green-400"
                    />
                    <span>
                      <span className="sr-only">{item.srLabel}</span>
                      <span
                        className="whitespace-pre-line"
                        style={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {item.text}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>

      {/* Legal Bottom Bar */}
      <section
        className="py-6"
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}
      >
        <div
          className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <small className="text-sm">
            © {currentYear} Mir Diagnostics. All rights reserved.
          </small>
          <p
            className="text-xs italic"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Serving Kashmir with Excellence
          </p>
        </div>
      </section>
    </footer>
  );
}
