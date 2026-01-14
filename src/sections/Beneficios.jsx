import SectionTitle from "../components/SectionTitle.jsx";

const beneficios = [
  {
    title: "Garantía real por escrito",
    detail: "Respaldamos instalación y reparación.",
  },
  {
    title: "Atención rápida",
    detail: "Agendamos en 24-48 horas.",
  },
  {
    title: "Técnicos certificados",
    detail: "Capacitación continua y protocolos seguros.",
  },
  {
    title: "Diagnóstico preciso",
    detail: "Menos vueltas, solución directa.",
  },
  {
    title: "Precios transparentes",
    detail: "Cotización clara antes de iniciar.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios">
      <div className="container grid-2">
        <div>
          <SectionTitle
            title="Por qué elegir SCAM"
            subtitle="Un servicio pensado para darte tranquilidad y resultados consistentes."
          />
        </div>
        <div className="benefits">
          {beneficios.map((beneficio) => (
            <div className="benefit" key={beneficio.title}>
              <strong>{beneficio.title}</strong>
              <span className="footer-muted">{beneficio.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
