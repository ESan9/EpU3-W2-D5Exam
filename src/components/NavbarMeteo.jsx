import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCloudSunRain } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { RxTextAlignBottom } from "react-icons/rx";
import UserOffcanvas from "./OffCanvasUser";
import { useLocation } from "react-router-dom";

const NavbarMeteo = () => {
  // Questo per fare in modo che la NavBar evidenzi correttamente la navigazione
  const location = useLocation();
  return (
    <header>
      <Navbar
        className="bg-primary text-light px-3"
        expand="lg"
        style={{ borderBottom: "1px solid white" }}
      >
        <Container fluid className="px-4">
          <Navbar.Brand as={Link} to="/" className="text-light">
            <FaCloudSunRain className="me-2" />
            Meteo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link
                as={Link}
                to="/"
                // Ternario power sempre per la Nav
                className={`fw-bold ${
                  location.pathname === "/" ? "text-light" : "text-black-50"
                }`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`/dettagli/${
                  localStorage.getItem("lastCity") || "Oristano"
                }`}
                className={`fw-bold ${
                  location.pathname.startsWith("/dettagli")
                    ? "text-light"
                    : "text-black-50"
                }`}
              >
                Dettagli sul tempo
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/preferiti/Oristano"
                className={`fw-bold ${
                  location.pathname.startsWith("/preferiti")
                    ? "text-light"
                    : "text-black-50"
                }`}
              >
                Preferiti
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3 fs-5 text-light">
              {/* Questo porta in basso la pagina, ho googlato */}
              <RxTextAlignBottom
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
              />

              <UserOffcanvas />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarMeteo;
