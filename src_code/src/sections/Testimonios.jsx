import SectionTitle from "../components/SectionTitle.jsx";

export default function Testimonios() {
  return (
    <section id="quienes-somos" className="about-section">
      <div className="container">
        <div className="about-grid grid-2">
          <div className="about-copy">
            <SectionTitle
              title="¿Quiénes somos?"
              subtitle={
                <>
                  <span className="about-highlight">CA.SCAM</span>{" "}
                  es una empresa especializada en aire acondicionado y
                  climatización con más de 15 años de experiencia, dedicada a
                  brindar soluciones integrales en sistemas de ventilación
                  mecánica, climatización y refrigeración para hogares, oficinas,
                  empresas e industria. Contamos con un equipo técnico altamente
                  capacitado y en constante actualización, lo que nos permite
                  ofrecer un servicio eficiente, confiable y orientado a la
                  satisfacción del cliente. Hemos desarrollado proyectos en
                  Lima y provincias, trabajando con marcas y empresas
                  reconocidas, siempre enfocados en la calidad, la puntualidad y
                  la atención personalizada.
                </>
              }
            />
            <p className="about-text">
              Trabajamos con procesos claros, técnicos certificados y una
              atención cercana para que cada instalación o mantenimiento quede
              perfecto desde el primer día.
            </p>
          </div>
          <figure className="about-media">
            <img
              src="/trabajos/equipo.jpg"
              alt="Equipo de trabajo SCAM"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
