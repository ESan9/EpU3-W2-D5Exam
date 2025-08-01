import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import "../assets/css/FooterMeteo.css";

const FooterMeteo = () => {
  return (
    <footer className="text-secondary py-4 bg-primary border-top">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Row className="mb-3">
              <Col>
                <div className="d-flex gap-3 fs-5 justify-content-center justify-content-lg-start">
                  <BsFacebook className="text-light" />
                  <BsInstagram className="text-light" />
                  <BsTwitterX className="text-light" />
                  <BsYoutube className="text-light" />
                </div>
              </Col>
            </Row>
            <hr className="text-light"></hr>
            <Row className=" d-flex justify-content-center row-cols-sm-1 row-cols-md-2">
              <Col className="d-flex flex-column align-items-center align-items-lg-start footer-links">
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
              <Col className="d-flex flex-column align-items-center align-items-lg-start footer-links">
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
                <div className="d-flex flex-column align-items-center align-items-lg-start footer-links">
                  <button className="btn btn-outline-light btn-sm rounded-0">
                    Codice di servizio
                  </button>
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <div className="d-flex justify-content-center justify-content-lg-start">
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
