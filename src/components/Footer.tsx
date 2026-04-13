export default function Footer() {
  return (
    <footer
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgb(11 38 24)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.125)",
        color: "white",
      }}
    >
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <article className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
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
                <div
                  className="font-bold text-xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Mir Diagnostics
                </div>
                <div
                  className="text-xs tracking-wider"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Medical Laboratory
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Providing world-class diagnostic services to the people of Kashmir
              and beyond. Accuracy, care, and trust — since our founding.
            </p>
          </article>

          {/* Quick Links */}
          <article>
            <h4
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/doctors", label: "Our Doctors" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm flex items-center gap-2 transition-colors"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.8)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          {/* Contact Info */}
          <article>
            <h4
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Info
            </h4>
            <ul className="space-y-3">
              {[
                {
                  path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Main Chowk, Pampore, J&K — 192121",
                },
                {
                  path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  text: "+91 7006087182",
                },
                {
                  path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  text: "mirdiagnowtics256@gmail.com",
                },
                {
                  path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "Mon–Sat: 7 AM – 8 PM\nSun: 8 AM – 2 PM",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: "var(--color-lab-light)" }}
                  >
                    <path d={item.path} />
                  </svg>
                  <span className="whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </section>

      <section
        className="py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
      >
        <article
          className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <span>
            © {new Date().getFullYear()} Mir Diagnostics. All rights reserved.
          </span>
          <span className="text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            Serving Kashmir with Excellence
          </span>
        </article>
      </section>
    </footer>
  );
}
