import logo from "assets/logo-remove-bg.png";
import { HashLink as Link } from "react-router-hash-link";

function MyLogo() {
  return (
    <div className="MyLogo flux">
      <Link className="MyLink__link" to="/#link">
        <div className="MyLogo__container container-fluid">
          <img className="row MyLogo__logo" src={logo} alt="Logo de Charles Cantin" />
          <div className="row MyLogo__title justify-content-center">Photographe</div>
          <div className="row MyLogo__subtitle justify-content-center">ENTREZ</div>
        </div>
      </Link>
    </div>
  );
}

export default MyLogo;
