import { Link } from "react-router-dom";


export default function Card({ id, title, cover }) {
  return (
    <Link
      to={`/logement/${id}`}
      className={`card ${!cover ? "card--noimg" : ""}`}
    >
      {cover ? (
        <img src={cover} alt={title} className="card_img" />
      ) : (
        <div className="card_placeholder">{title}</div>
      )}
      <h2 className="card_title">{title}</h2>
    </Link>
  );
}
