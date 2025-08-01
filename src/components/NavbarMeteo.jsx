import { Navbar, Nav, Container } from "react-bootstrap";
import { BsBell, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaCloudSunRain } from "react-icons/fa6";

const NavbarMeteo = () => {
  return (
    <header className="text-secondary border-bottom border-light">
      <Navbar className="bg-primary" expand="lg" variant="dark">
        <Container fluid className="px-4">
          <Navbar.Brand as={Link} to="/">
            <FaCloudSunRain />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/" className="fw-bold active">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`/dettagli/${
                  localStorage.getItem("lastCity") || "Oristano"
                }`}
                className="fw-bold"
              >
                Dettagli sul tempo
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`/preferiti/Oristano`}
                // Ho messo una città fissa anche se si poteva fare con localStorage ma non finivo più
                className="fw-bold"
              >
                Preferiti
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3 text-white fs-5">
              <BsBell />
              <BsPersonCircle />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarMeteo;
