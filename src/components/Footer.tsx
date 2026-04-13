export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      // Ensure the background color meets contrast ratios (4.5:1) for small text
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
                aria-hidden="true" // Decorative icon
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                    color: "rgba(255,255,255,0.85)", // Increased opacity for WCAG contrast
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
                    className="text-sm link-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-[1px]"
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
                  path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Main Chowk, Pampore, J&K — 192121",
                  srLabel: "Location:",
                },
                {
                  path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  text: "+91 7006087182",
                  srLabel: "Phone:",
                },
                {
                  path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  text: "mirdiagnowtics256@gmail.com",
                  srLabel: "Email:",
                },
                {
                  path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "Mon–Sat: 7 AM – 8 PM\nSun: 8 AM – 2 PM",
                  srLabel: "Hours:",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4 mt-0.5 shrink-0 text-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.path}
                    />
                  </svg>
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
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Legal Bottom Bar */}
      <section
        className="py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
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
