import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProjectGalleryModal({ project, onClose }) {
  const modalRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    setActiveIndex(0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const totalPhotos = project.photos.length;

  const handleBackdropClick = () => {
    onClose();
  };

  const handleFullscreen = async () => {
    const element = modalRef.current;
    if (!document.fullscreenElement && element?.requestFullscreen) {
      await element.requestFullscreen();
      return;
    }

    if (document.exitFullscreen) {
      await document.exitFullscreen();
    }
  };

  return (
    <div className="project-modal">
      <div className="project-modal-backdrop" onClick={handleBackdropClick} />
      <div
        className="project-modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={`Galería ${project.title}`}
        ref={modalRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-modal-header">
          <div>
            <h3 className="project-modal-title">{project.title}</h3>
            <div className="project-modal-meta">
              <span className="chip">{project.location}</span>
              <span className="chip">{project.service}</span>
            </div>
          </div>
          <div className="project-modal-actions">
            <span className="project-gallery-counter">
              {activeIndex + 1}/{totalPhotos}
            </span>
            <button
              className="project-modal-button"
              type="button"
              onClick={handleFullscreen}
            >
              Pantalla completa
            </button>
            <button
              className="project-modal-button project-modal-close"
              type="button"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
        <div className="project-modal-body">
          <Swiper
            modules={[Navigation, Thumbs]}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="project-gallery-main"
          >
            {project.photos.map((photo, index) => (
              <SwiperSlide key={`${project.id}-photo-${index}`}>
                <img src={photo} alt={`${project.title} ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={5}
            spaceBetween={8}
            watchSlidesProgress
            className="project-gallery-thumbs"
          >
            {project.photos.map((photo, index) => (
              <SwiperSlide key={`${project.id}-thumb-${index}`}>
                <img src={photo} alt={`Miniatura ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
