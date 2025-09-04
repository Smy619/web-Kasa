import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" replace />;

  return (
    <>
      <div className="container section">
        <Slideshow
          images={logement.pictures ?? [logement.cover]}
          alt={logement.title}
        />
      </div>
      <div className="container section">
        <div className="logement-container">
         <div className="sous-title">
          <h1>{logement.title}</h1>
          <span className="location">{logement.location}</span>
          <Tags items={logement.tags} />
         </div>
          <div className="host">
            <Host name={logement.host.name} picture={logement.host.picture} />
            <Rating value={Number(logement.rating)} />
          </div>
        </div>

        <div className="collapse-container">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((e, i) => (
                <li key={`${i}`}>{e}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </>
  );
}
