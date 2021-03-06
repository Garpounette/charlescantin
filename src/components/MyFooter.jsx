import logo from "../assets/logo-remove-bg.png";
import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.png";
import { Link } from "react-router-dom";

function MyFooter({ page }) {
  return (
    <div className="MyFooter flux pb-2">
      <div className="MyFooter__social pt-4 pb-2">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={facebook} alt="logo facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="logo instagram" />
        </a>
      </div>
      <div className="MyFooter__logo pt-2 pb-2">
        <Link to={page}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="MyFooter__copyright">© Charles Cantin 2022, Tous droits réservés.</div>
      <div className="MyFooter__links">
        <Link className="MyFooter__link" to="privacy">
          politique de confidentialité
        </Link>
        <span> | </span>
        <Link className="MyFooter__link" to="condition">
          conditions générale de vente
        </Link>
      </div>
    </div>
  );
}

export default MyFooter;
