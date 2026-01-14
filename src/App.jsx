import SiteHeader from "./sections/SiteHeader.jsx";
import Hero from "./sections/Hero.jsx";
import Servicios from "./sections/Servicios.jsx";
import Trabajos from "./sections/Trabajos.jsx";
import Beneficios from "./sections/Beneficios.jsx";
import Testimonios from "./sections/Testimonios.jsx";
import Marcas from "./sections/Marcas.jsx";
import CTA from "./sections/CTA.jsx";
import Contacto from "./sections/Contacto.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Servicios />
        <Trabajos />
        <Beneficios />
        <Testimonios />
        <Marcas />
        <CTA />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
