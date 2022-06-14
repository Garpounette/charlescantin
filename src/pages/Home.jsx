import MyCarousel from "components/MyCarousel";
import galery from "../assets/images/baby-gedde4f829_1280.jpg";
import services from "../assets/images/couple-g41c7b12d0_1280.jpg";
import contact from "../assets/images/children-gf8162b6fb_1280.jpg";
import { Link } from "react-router-dom";

function Home() {
  //TODO: problème de responsive, voir si en utilisant une image à la place d'une div ...
  return (
    <>
      <MyCarousel />
      <div className="flux">
        <Link className="home__link" to="/galery">
          <img className="home__image" src={galery} alt="Bébé studieux" />
          Galerie
        </Link>
        <Link className="home__link" to="/services">
          <img className="home__image" src={services} alt="Couple amoureux" />
          Prestations
        </Link>
        <Link className="home__link" to="/contact">
          <img className="home__image" src={contact} alt="Enfants souriants" />
          Contact
        </Link>
      </div>
    </>
  );
}

export default Home;
