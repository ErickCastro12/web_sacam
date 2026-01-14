import { site } from "../data/site.js";
import logo from "../logo-scam.png";
import wordmark from "../logo_scamtexto.png";

const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path
            d="M0,64 C240,10 480,10 720,50 C960,92 1200,110 1440,40 L1440,140 L0,140 Z"
            fill="var(--blue)"
          />
        </svg>
      </div>
      <div className="container footer-content">
        <div className="footer-brand">
            <div className="footer-brand-header">
    <img className="footer-logo" src={logo} alt="SCAM logo" />
    <img className="footer-wordmark" src={wordmark} alt="CA. SCAM" />
  </div>
<div className="footer-brand-text">
            <strong>{site.companyName}</strong>
            <span>{site.tagline}</span>
          </div>
          <p>
            Contamos con personal altamente capacitado y un enfoque en la
            satisfacción total de nuestros clientes.
          </p>
        </div>
        <div className="footer-section">
          <h4>Datos generales</h4>
          <ul className="footer-list">
            {site.phones.map((phone) => (
              <li key={`${phone.label}-${phone.value}`}>
                <span className="footer-label">Tel:</span>
                <a href={phone.href}>{phone.value}</a>
              </li>
            ))}
            {site.emails.map((email) => (
              <li key={`${email.label}-${email.value}`}>
                <span className="footer-label">Correo:</span>
                <a href={email.href}>{email.value}</a>
              </li>
            ))}
            <li>
              <span className="footer-label">Ubicación:</span>
              {site.location}
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes sociales</h4>
          <div className="footer-socials">
            {socials.map((social) => (
              <a key={social.name} href={social.href}>
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © 2026 SCAM. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
