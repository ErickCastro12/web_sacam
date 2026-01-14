import SectionTitle from "../components/SectionTitle.jsx";
import { testimonios } from "../data/testimonios.js";

export default function Testimonios() {
  return (
    <section id="testimonios">
      <div className="container">
        <SectionTitle
          title="Clientes que ya disfrutan su clima ideal"
          subtitle="Opiniones reales de familias y empresas en Lima."
        />
        <div className="testimonials">
          {testimonios.map((testimonio) => (
            <article className="card" key={testimonio.name}>
              <div className="stars">{testimonio.rating}</div>
              <p>“{testimonio.text}”</p>
              <strong>
                {testimonio.name} — {testimonio.district}
              </strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
