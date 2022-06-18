import galery from "../assets/images/baby2.jpg";
import services from "../assets/images/couple1.jpg";
import contact from "../assets/images/children.jpg";
import { Link } from "react-router-dom";

function MyLink() {
  return (
    <div className="MyLink flux py-5 d-flex justify-content-evenly" id="link">
      <Link className="MyLink__link col-3" to="/galery">
        <img className="MyLink__image" src={galery} alt="Bébé studieux" />
        <span className="MyLink__title">Galerie</span>
      </Link>
      <Link className="MyLink__link col-3" to="/services">
        <img className="MyLink__image" src={services} alt="Couple amoureux" />
        <span className="MyLink__title">Prestations</span>
      </Link>
      <Link className="MyLink__link col-3" to="/contact">
        <img className="MyLink__image" src={contact} alt="Enfants souriants" />
        <span className="MyLink__title">Contact</span>
      </Link>
    </div>
  );
}

export default MyLink;
