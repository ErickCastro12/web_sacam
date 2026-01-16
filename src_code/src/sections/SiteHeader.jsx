import { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import { site } from "../data/site.js";
import logo from "../logo-scam.png";
import wordmark from "../logo_scamtexto.png";

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      className="contact-icon-svg"
    >
      <path
        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="contact-icon-svg"
    >
      <path
        d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Quienes somos", href: "#quienes-somos" },
  { label: "Contacto", href: "#contacto" },
];

export default function SiteHeader() {
  const contactColumns = Math.max(site.phones.length, site.emails.length);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-inner">
        <div className="site-brand">
          <img
            className="site-brand-logo"
            src={logo}
            alt={`${site.companyName} logo`}
            loading="eager"
          />
          <img
            className="site-brand-wordmark"
            src={wordmark}
            alt={`${site.companyName} identidad`}
            loading="eager"
          />
        </div>
          <div className="contact-list" style={{ "--contact-columns": contactColumns }}>
            {Array.from({ length: contactColumns }).map((_, index) => (
              <div className="contact-col" key={`contact-col-${index}`}>
                {site.phones[index] && (
                  <div className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      <PhoneIcon />
                    </span>
                    <a href={site.phones[index].href}>{site.phones[index].value}</a>
                  </div>
                )}
                {site.emails[index] && (
                  <div className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      <EmailIcon />
                    </span>
                    <a href={site.emails[index].href}>{site.emails[index].value}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="nav-actions">
            <Button href={site.whatsappUrl} variant="accent">
              Cotizar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <div className="menu-bar">
        <div className="container menu-inner">
          <button
            type="button"
            className="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
          </button>
          <nav className="nav-links nav-links-desktop" aria-label="Navegacion principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-drawer-panel">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Menu</span>
            <button type="button" className="mobile-drawer-close" onClick={closeMenu}>
              Cerrar
            </button>
          </div>
          <nav className="nav-links nav-links-mobile" aria-label="Navegacion movil">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <button
          type="button"
          className="mobile-drawer-backdrop"
          aria-label="Cerrar menu"
          onClick={closeMenu}
        />
      </div>
    </header>
  );
}
