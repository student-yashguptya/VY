export default function SectionHeading({ eyebrow, title, subtitle, align="center" }) {
  return (
    <header className={`section-heading ${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="title">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}
