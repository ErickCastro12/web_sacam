import SectionTitle from "../components/SectionTitle.jsx";
import { marcas } from "../data/marcas.js";

export default function Marcas() {
  return (
    <section id="marcas">
      <div className="container">
        <SectionTitle
          title="Trabajamos con marcas líderes"
          subtitle="Soporte técnico y repuestos compatibles."
        />
        <div className="brands-marquee" aria-label="Marcas disponibles">
          <div className="brands-track">
            {marcas.concat(marcas).map((marca, index) => (
              <div className="brand-tile" key={`${marca.name}-${index}`}>
                <img
                  className="brand-logo"
                  src={marca.logo}
                  alt={marca.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
