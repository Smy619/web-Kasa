import starActive from "../../assets/icons/star-active.svg";
import starInactive from "../../assets/icons/star-inactive.svg";


export default function Star({ filled }) {
  return (
    <img
      src={filled ? starActive : starInactive}
      alt="star icon"
      className="star-icon"
    />
  );
}
