import { site } from "../data/site.js";
import logo from "../logo-scam.png";
import wordmark from "../logo_scamtexto.png";

function EmailIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false">
      <path
        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 22s7-5.25 7-12a7 7 0 1 0-14 0c0 6.75 7 12 7 12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M22 12s0-4-1-5-3-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 3 1 9 1 8 0 9-1 1-5 1-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
    </svg>
  );
}

const socials = [
  { name: "Facebook", href: "#", icon: <FacebookIcon /> },
  { name: "Instagram", href: "#", icon: <InstagramIcon /> },
  { name: "YouTube", href: "#", icon: <YouTubeIcon /> },
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
                <span className="footer-icon" aria-hidden="true">
                  <PhoneIcon />
                </span>
                <span className="footer-label">Tel:</span>
                <a href={phone.href}>{phone.value}</a>
              </li>
            ))}
            {site.emails.map((email) => (
              <li key={`${email.label}-${email.value}`}>
                <span className="footer-icon" aria-hidden="true">
                  <EmailIcon />
                </span>
                <span className="footer-label">Correo:</span>
                <a href={email.href}>{email.value}</a>
              </li>
            ))}
            <li>
              <span className="footer-icon" aria-hidden="true">
                <LocationIcon />
              </span>
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
                <span className="social-icon" aria-hidden="true">
                  {social.icon}
                </span>
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
