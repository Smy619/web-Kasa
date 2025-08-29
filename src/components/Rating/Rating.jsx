import Star from "../Star/Star";


export default function Rating({ value = 0, max = 5 }) {
  return (
    <div className="rating">
      {Array.from({ length: max }, (_, index) => (
        <Star key={index} filled={index < value} />
      ))}
    </div>
  );
}
