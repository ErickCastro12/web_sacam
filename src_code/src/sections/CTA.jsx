import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { site } from "../data/site.js";

export default function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <div className="cta">
          <SectionTitle
            title="Tu ambiente fresco empieza hoy"
            subtitle="Agenda tu visita técnica y recibe una cotización clara en minutos."
          />
          <Button href={site.whatsappUrl}>Cotizar por WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
