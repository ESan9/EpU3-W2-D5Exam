import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

// Giusto per provare

const UserOffcanvas = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <BsPersonCircle
        size={25}
        style={{ cursor: "pointer" }}
        onClick={() => setShow(true)}
      />

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profilo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Nome utente: Zuzzurellone</p>
          <Button variant="danger">Logout</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserOffcanvas;
