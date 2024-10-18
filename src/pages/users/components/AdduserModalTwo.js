import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddUserModalTwo() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  // console.log(state);

  async function handleSubmit() {
    const body = {
      firstName: state.firstName,
      lastName: state.lastName,
      age: state.age,
      gender: state.gender,
      email: state.email,
      userName: state.userName,
      password: state.password,
    };

    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    // console.log(res, "on submit");
    console.log(data, "on DATA");

    // setContactUs([...contactUs, body]);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Another User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                name="age"
                type="number"
                placeholder="Age"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                name="gender"
                type="text"
                placeholder="Gender"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>userName</Form.Label>
              <Form.Control
                name="userName"
                type="text"
                placeholder="UserName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleSubmit}>
            Submit Now
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddUserModalTwo;
