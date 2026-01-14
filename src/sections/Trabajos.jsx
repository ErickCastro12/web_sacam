import { useMemo, useState } from "react";
import ProjectGalleryModal from "../components/ProjectGalleryModal.jsx";
import ProjectsCarousel from "../components/ProjectsCarousel.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { trabajos } from "../data/trabajos.js";

export default function Trabajos() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = useMemo(
    () => trabajos.find((project) => project.id === selectedProjectId) || null,
    [selectedProjectId]
  );

  return (
    <section id="trabajos">
      <div className="container">
        <SectionTitle
          title="Proyectos destacados"
          subtitle="Explora un resumen de nuestros trabajos y abre cada caso para ver el detalle."
        />
        <ProjectsCarousel
          projects={trabajos}
          onOpen={(projectId) => setSelectedProjectId(projectId)}
        />
      </div>
      <ProjectGalleryModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
}
