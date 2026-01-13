const WA_PHONE = "51955879334";
const WA_DEFAULT_TEXT = "Hola, quiero cotizar un servicio de climatización.";

function waLink(text) {
  const msg = encodeURIComponent(text || WA_DEFAULT_TEXT);
  return `https://wa.me/${WA_PHONE}?text=${msg}`;
}

document.querySelectorAll("[data-wa]").forEach((link) => {
  const text = link.getAttribute("data-wa-text") || WA_DEFAULT_TEXT;
  link.setAttribute("href", waLink(text));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
if (nav && hamburger) {
  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  };

  hamburger.addEventListener("click", () => {
    setOpen(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
      setOpen(false);
    }
  });
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const viewport = carousel.querySelector("[data-carousel-viewport]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const dots = carousel.querySelectorAll("[data-carousel-dot]");
  let index = 0;
  const AUTO_DELAY = 4500;
  let autoplayId = null;

  const getStep = () => {
    const card = track?.children[0];
    if (!card) {
      return 0;
    }
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.gap || styles.columnGap || "0");
    return card.getBoundingClientRect().width + gap;
  };

  const getMaxIndex = (step) => {
    if (!viewport || !track || !step) {
      return 0;
    }
    const maxScroll = Math.max(0, track.scrollWidth - viewport.offsetWidth);
    return Math.max(0, Math.ceil(maxScroll / step));
  };

  const update = () => {
    const step = getStep();
    const maxIndex = getMaxIndex(step);
    const maxScroll = track && viewport ? Math.max(0, track.scrollWidth - viewport.offsetWidth) : 0;
    index = Math.max(0, Math.min(index, maxIndex));
    const translate = Math.min(index * step, maxScroll);
    track.style.transform = `translateX(${-translate}px)`;
    dots.forEach((dot, i) => {
      dot.style.display = i <= maxIndex ? "" : "none";
      const isActive = i === index;
      dot.classList.toggle("is-active", isActive);
      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      window.clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayId = window.setInterval(() => {
      const step = getStep();
      const maxIndex = getMaxIndex(step);
      if (maxIndex <= 0) {
        return;
      }
      index = index >= maxIndex ? 0 : index + 1;
      update();
    }, AUTO_DELAY);
  };

  prev?.addEventListener("click", () => {
    index -= 1;
    update();
    startAutoplay();
  });

  next?.addEventListener("click", () => {
    index += 1;
    update();
    startAutoplay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      update();
      startAutoplay();
    });
  });

  window.addEventListener("resize", update);
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", startAutoplay);
  carousel.addEventListener("pointerdown", stopAutoplay);
  update();
  startAutoplay();
});

const form = document.getElementById("quickQuoteForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nombre = data.get("nombre") || "Cliente";
    const servicio = data.get("servicio") || "Servicio de climatización";
    const ubicacion = data.get("ubicacion") || "No especificada";
    const detalle = data.get("detalle") || "Sin detalles";

    const text = `Hola, soy ${nombre}. Quiero cotizar: ${servicio}. Ubicación: ${ubicacion}. Detalles: ${detalle}.`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  });
}
