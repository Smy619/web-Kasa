

export default function Tags({ items = [] }) {
  return (
    <div className="tags">
      {items.map((tag) => (
        <button key={tag} className="tag">
          {tag}
        </button>
      ))}
    </div>
  );
}
