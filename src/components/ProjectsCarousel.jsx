import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsCarousel({ projects, onOpen }) {
  return (
    <div className="projects-swiper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={18}
        slidesPerView={1.1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          900: { slidesPerView: 2.2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <article className="project-card">
              <div
                className="project-cover"
                style={{ backgroundImage: `url(${project.cover})` }}
                role="img"
                aria-label={project.title}
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span className="chip">{project.location}</span>
                  <span className="chip">{project.service}</span>
                </div>
                <button
                  className="project-open"
                  type="button"
                  onClick={() => onOpen(project.id)}
                >
                  Ver fotos
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
