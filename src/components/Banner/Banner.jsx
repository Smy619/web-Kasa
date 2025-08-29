export default function Banner({ img, title, shadow = false }) {
  return (
    <div className={`banner ${shadow ? "has-shadow" : ""}`}>
      <img src={img} alt="Banner Image" className="img-banner" />
      {title && <h1 className="banner_title">{title}</h1>}
    </div>
  );
}
