import { useState, useContext } from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import InfoContext from "../context/InfoContext";
export default function Nav(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("none");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [tokenNumber, settokenNumber] = useState("");
  const [problem, setProblem] = useState("");
  const context = useContext(InfoContext);
  const { appoint } = context;

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleSubmit = async () => {
    appoint(name, date, number, tokenNumber, problem);
    setShow(false);
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
            <Form.Select
              aria-label="Default select example"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option>Select Your Doctor</option>
              <option value="Subhashish">Dr.Subhashish Jung Shah</option>
              <option value="Prashish">Dr.Prashish GT</option>
              <option value="Sudip">Dr.Sudip Tamang</option>
              <option value="Ayush">Dr.Aayush Khatiwada</option>
            </Form.Select>
            <Form.Control
              type="date"
              className="my-2"
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Control
              type="tel"
              placeholder="Enter Your Contact Number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="my-2"
            />
            <Form.Control
              type="tel"
              onChange={(e) => {
                settokenNumber(e.target.value);
              }}
              placeholder="Enter Your Token Number"
              className="my-2"
            />
            <Form.Control
              as="textarea"
              row={5}
              onChange={(e) => {
                setProblem(e.target.value);
              }}
              placeholder="Enter Your Reasons"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            BOOK NOW
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
