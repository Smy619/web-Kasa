import logements from "../../data/logements.json";
import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";
import homeBanner from "../../assets/img-banner.png";


export default function Home() {
  return (
    <>
      <div className="container section">
        <Banner
          img={homeBanner}
          title={
            <>
              Chez vous,{" "}
              <span className="break-mobile">partout et ailleurs</span>
            </>
          }
          shadow
        />
      </div>
      <div className="container section">
        <section className="cards-shell">
          <div className="card-grid">
            {logements.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                cover={item.cover}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
