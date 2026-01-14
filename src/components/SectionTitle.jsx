export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{subtitle}</p>
    </>
  );
}
