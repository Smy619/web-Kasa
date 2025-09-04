

export default function Host({ name = "", picture }) {
  const parts = name.split(" ");
  return (
    <div className="profile">
      <div className="host-name">
        {parts.map((part, index) => (
          <span key={index}>{part}</span>
        ))}
      </div>
      <img src={picture} className="host-picture" alt="name" />
    </div>
  );
}
