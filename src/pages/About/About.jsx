import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutImage from "../../assets/img-about.png";
import aboutData from "../../data/about.json";


export default function About() {
  return (
    <>
      <div className="container section">
        <Banner img={aboutImage} alt="Montagne" />
      </div>
      <div className="container section">
        <div className="about-collapser">
          {aboutData.map((item) => (
            <Collapse key={item.id} title={item.title}>
              <p>{item.content}</p>
            </Collapse>
          ))}
        </div>
      </div>
    </>
  );
}
