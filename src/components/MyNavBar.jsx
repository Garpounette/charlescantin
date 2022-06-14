import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavBar({ page }) {
  return (
    <Navbar expand="lg" className="fixed-top MyNavBar flux">
      <Container>
        {page !== "/" && (
          <Link to="/" className="navbar-brand MyNavBar__link">
            Charles Cantin
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
