export default function ComicCard({ title, image }) {
  return (
    <div className="comic-card">
      <img src={image} alt={title} className="comic-thumb" />
      <p className="comic-title">{title.toUpperCase()}</p>
    </div>
  );
}
