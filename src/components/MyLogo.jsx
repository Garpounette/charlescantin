import logo from "assets/logo-remove-bg.png";

function MyLogo() {
  return (
    <div className="MyLogo flux">
      <div className="MyLogo__container container-fluid">
        <img className="row MyLogo__logo" src={logo} alt="Logo de Charles Cantin" />
        <div className="row MyLogo__title justify-content-center">Photographe</div>
        <div className="row MyLogo__subtitle justify-content-center">ENTREZ</div>
      </div>
    </div>
  );
}

export default MyLogo;
