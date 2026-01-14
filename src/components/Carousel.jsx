export default function Carousel({ label, children }) {
  return (
    <div className="carousel">
      <div className="carousel-track" aria-label={label}>
        {children}
      </div>
    </div>
  );
}
