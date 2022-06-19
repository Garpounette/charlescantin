import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo-remove-bg.png";

function MyNavBar({ page }) {
  const darkNavBar = page !== "/" ? "darkNavBar" : null;
  return (
    <Navbar collapseOnSelect expand="lg" className={"MyNavBar flux " + darkNavBar}>
      <Container className={`${page === "/" ? "justify-content-end" : ""}`}>
        {page !== "/" && (
          <Nav.Link as={Link} to="/" href="/" className="navbar-brand MyNavBar__brand">
            <img src={logo} alt="logo de charles cantin" />
          </Nav.Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="MyNavBar__link nav-link" to="/" href="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} className="MyNavBar__link nav-link" to="/Galery" href="/Galery">
              Galerie
            </Nav.Link>
            <Nav.Link as={Link} className="MyNavBar__link nav-link" to="/Services" href="/Services">
              Prestations
            </Nav.Link>
            <Nav.Link as={Link} className="MyNavBar__link nav-link" to="/Contact" href="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
