import SectionTitle from "../components/SectionTitle.jsx";

const beneficios = [
  {
    title: "Experiencia y expertise",
    detail:
      "Trayectoria comprobada en instalaciones HVAC y mantenimiento especializado.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 7h16v11H4z" />
        <path d="M9 7V5h6v2" />
        <path d="M8 13h8" />
      </svg>
    ),
  },
  {
    title: "Calidad garantizada",
    detail: "Procesos claros y control de calidad en cada proyecto.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3l7 4v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V7l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Innovación tecnológica",
    detail: "Diagnóstico avanzado y soluciones modernas para mayor eficiencia.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8 14c-1.2-1-2-2.5-2-4a6 6 0 1 1 12 0c0 1.5-.8 3-2 4-.6.5-1 1.2-1 2H9c0-.8-.4-1.5-1-2z" />
      </svg>
    ),
  },
  {
    title: "Soluciones personalizadas",
    detail: "Nos adaptamos a las necesidades y el presupuesto de cada cliente.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <circle cx="8" cy="6" r="2" />
        <circle cx="16" cy="12" r="2" />
        <circle cx="10" cy="18" r="2" />
      </svg>
    ),
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <SectionTitle
            title="¿Por qué elegirnos?"
            subtitle="Compromiso, calidad y experiencia para climatizar tus espacios con resultados confiables."
          />
        </div>
        <div className="benefits-grid">
          {beneficios.map((beneficio) => (
            <article className="benefit-card" key={beneficio.title}>
              <div className="benefit-icon">{beneficio.icon}</div>
              <h3>{beneficio.title}</h3>
              <p>{beneficio.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
