import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import "../assets/css/FooterMeteo.css";

const FooterMeteo = () => {
  return (
    <footer className="text-secondary py-4 bg-primary border-top">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Row className="mb-3">
              <Col>
                <div className="d-flex gap-3 fs-5 justify-content-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook className="text-light" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram className="text-light" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitterX className="text-light" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsYoutube className="text-light" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr className="text-light"></hr>
            <Row className=" d-flex justify-content-center row-cols-sm-1">
              <Col className="d-flex flex-column align-items-center footer-links">
                <p>
                  <a href="#">Centro assistenza</a>
                </p>
                <p>
                  <a href="#">Lavora con noi</a>
                </p>
                <p>
                  <a href="#">Preferenze cookie</a>
                </p>
              </Col>
              <Col className="d-flex flex-column align-items-center footer-links">
                <p>
                  <a href="#">Contattaci</a>
                </p>
                <p>
                  <a href="#">Termini di utilizzo</a>
                </p>
                <p>
                  <a href="#">Informazioni</a>
                </p>
              </Col>
            </Row>
            <hr className="text-light"></hr>
            <Row className="mt-3">
              <Col>
                <div className="d-flex flex-column align-items-center footer-links">
                  <button
                    className="btn btn-outline-light btn-sm rounded-0"
                    // Questo porta in alto la pagina, ho googlato
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Torna in cima
                  </button>
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <div className="d-flex justify-content-center">
                  <small className="text-light">
                    &copy; Il Meteo che ci piace
                  </small>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterMeteo;
