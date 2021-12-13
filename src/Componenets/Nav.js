import { useState } from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
export default function Nav(props) {
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div className="header-nav">
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>
      {props.menu && (
        <div className="menu">
          <a href="">HOME</a>
          <a href="" onClick={handleShow}>
            BOOK AN APPOINTMENT
          </a>
          <a href="">DOWNLOAD LAB REPORT</a>
          <a href="">LOGOUT</a>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Book Appointment 🎫</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <Form.Select aria-label="Default select example">
              <option>Select Your Doctor</option>
              <option value="1">Dr.Subhashish Jung Shah</option>
              <option value="2">Dr.Prashish GT</option>
              <option value="3">Dr.Sudip Tamang</option>
              <option value="3">Dr.Aayush Khatiwada</option>
            </Form.Select>
            <Form.Control type="date" className="my-2" />
            <Form.Control
              type="tel"
              placeholder="Enter Your Contact Number"
              className="my-2"
            />
            <Form.Control as="textarea" row={5}  placeholder="Enter Your Reasons"/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            BOOK NOW
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
