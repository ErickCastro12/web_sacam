import SectionTitle from "../components/SectionTitle.jsx";
import { servicios } from "../data/servicios.js";
import { site } from "../data/site.js";

export default function Contacto() {
  return (
    <section id="contacto">
      <div className="container grid-2">
        <div>
          <SectionTitle
            title="Contáctanos"
            subtitle="Cuéntanos tu necesidad y te responderemos rápido."
          />
          <div className="card">
            <p>
              <strong>WhatsApp:</strong> {site.whatsapp}
            </p>
            <p>
              <strong>Ubicación:</strong> {site.location}
            </p>
            <p>
              <strong>Zonas:</strong> {site.zones.join(", ")}
            </p>
          </div>
        </div>
        <form className="card" aria-label="Formulario de contacto">
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="tel" name="celular" placeholder="Celular" required />
          <input type="text" name="distrito" placeholder="Distrito" required />
          <select name="servicio" required>
            <option value="">Servicio</option>
            {servicios.map((servicio) => (
              <option key={servicio.title} value={servicio.title}>
                {servicio.title}
              </option>
            ))}
          </select>
          <textarea name="mensaje" placeholder="Mensaje"></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
