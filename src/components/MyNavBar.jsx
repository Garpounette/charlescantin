import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo-remove-bg.png";

function MyNavBar({ page }) {
  const darkNavBar = page !== "/" ? "darkNavBar" : null;
  return (
    <Navbar expand="lg" className={"MyNavBar flux " + darkNavBar}>
      <Container>
        {page !== "/" && (
          <Link to="/" className="navbar-brand MyNavBar__brand">
            <img src={logo} alt="logo de charles cantin" />
          </Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="MyNavBar__link nav-link" to="/">
              Accueil
            </Link>
            <Link className="MyNavBar__link nav-link" to="/Galery">
              Galerie
            </Link>
            <Link className="MyNavBar__link nav-link" to="/Services">
              Prestations
            </Link>
            <Link className="MyNavBar__link nav-link" to="/Contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
