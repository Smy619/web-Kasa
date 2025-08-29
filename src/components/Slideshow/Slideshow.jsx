import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";


export default function Slideshow({ images = [], alt = "" }) {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  if (images.length === 0) return null;
  return (
    <section className="slideshow">
      <div className="thumbnails">
        {images.length > 1 && (
          <>
            <button
              className="arrow left"
              onClick={prevSlide}
              aria-label="Image précédente"
            >
              <img src={arrowLeft} alt="Précédent" className="arrow-icon" />
            </button>
            <button
              className="arrow right"
              onClick={nextSlide}
              aria-label="Image suivante"
            >
              <img src={arrowRight} alt="Suivant" className="arrow-icon" />
            </button>
          </>
        )}
        <img src={images[current]} alt={`${alt} ${current + 1}`} />
        {images.length > 1 && (
          <div className="counter">
            {current + 1} / {images.length}
          </div>
        )}
      </div>
    </section>
  );
}
