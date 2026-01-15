import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../components/SectionTitle.jsx";
import { servicios } from "../data/servicios.js";

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="container">
        <SectionTitle
          title="Servicios que resuelven hoy y evitan problemas mañana"
          subtitle="Soluciones claras, precios transparentes y respaldo técnico especializado en Lima y Provincias."
        />
        <div className="services-grid services-grid--desktop">
          {servicios.map((servicio) => (
            <article
              key={servicio.title}
              className="service-card"
              style={{ backgroundImage: `url(${servicio.image})` }}
            >
              <div className="service-card-content">
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
                <strong>{servicio.benefit}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="services-swiper services-swiper--mobile">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={18}
            slidesPerView={1.1}
            centeredSlides={false}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              420: { slidesPerView: 1.2 },
              520: { slidesPerView: 1.3 },
            }}
          >
            {servicios.map((servicio) => (
              <SwiperSlide key={servicio.title}>
                <article
                  className="service-card"
                  style={{ backgroundImage: `url(${servicio.image})` }}
                >
                  <div className="service-card-content">
                    <h3>{servicio.title}</h3>
                    <p>{servicio.description}</p>
                    <strong>{servicio.benefit}</strong>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
