import galery from "../assets/images/baby-gedde4f829_1280.jpg";
import services from "../assets/images/couple-g41c7b12d0_1280.jpg";
import contact from "../assets/images/children-gf8162b6fb_1280.jpg";
import { Link } from "react-router-dom";

function MyLink() {
  return (
    <div className="MyLink flux my-5 d-flex justify-content-around" id="link">
      <Link className="MyLink__link" to="/galery">
        <img className="MyLink__image" src={galery} alt="Bébé studieux" />
        <span className="MyLink__title">Galerie</span>
      </Link>
      <Link className="MyLink__link" to="/services">
        <img className="MyLink__image" src={services} alt="Couple amoureux" />
        <span className="MyLink__title">Prestations</span>
      </Link>
      <Link className="MyLink__link" to="/contact">
        <img className="MyLink__image" src={contact} alt="Enfants souriants" />
        <span className="MyLink__title">Contact</span>
      </Link>
    </div>
  );
}

export default MyLink;
