export default function Card({ as:Tag="article", className="", children, onClick }) {
  return (
    <Tag className={`card ${className}`} onClick={onClick}>
      {children}
    </Tag>
  );
}
