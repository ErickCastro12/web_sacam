import Button from "../components/Button.jsx";
import { site } from "../data/site.js";

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero">
        <div className="hero-grid">
          <div>
            <span className="chip">{site.tagline}</span>
            <h1>Ambientes frescos, saludables y eficientes todo el año</h1>
            <p>
              Diseñamos, instalamos y mantenemos sistemas de aire acondicionado
              para hogares, oficinas y comercios con respuesta rápida y garantía
              real.
            </p>
            <div className="hero-actions">
              <Button href={site.whatsappUrl}>Cotizar por WhatsApp</Button>
              <Button href="#trabajos" variant="outline">
                Ver trabajos
              </Button>
            </div>
            <div className="hero-stats">
              <div className="stat">+14 años de experiencia</div>
              <div className="stat">Atención en 24-48 hrs</div>
            </div>
          </div>
          <div className="hero-card hero-visit-card">
            <div
              className="hero-visit-media"
              role="img"
              aria-label="Instalación de aire acondicionado tipo split"
              style={{ backgroundImage: "url(/trabajos/scamlanding.jpg)" }}
            >
              <div className="hero-visit-overlay">
                <h3>Agenda tu visita técnica</h3>
                <p>
                  Te asesoramos en capacidad, ubicación y ahorro energético
                  para que inviertas bien desde el inicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
