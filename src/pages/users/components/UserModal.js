import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function UserModal({ handleClose, userId, show }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    gender: "",
    email: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(userData, "Edit Data");

  // Fetch user data based on userId
  async function fetchProducts() {
    const res = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    setUserData(data); // Set the fetched user data
    // console.log(data);
  }

  // Fetch data on modal open
  useEffect(() => {
    if (show) {
      fetchProducts();
    }
  }, [show]);

  // Function to clear form data
  const clearForm = () => {
    setUserData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      gender: "",
      email: "",
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{userData.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First Name"
              value={userData.firstName}
              onChange={handleChange}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={handleChange}
            />
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="UserName"
              value={userData.username}
              onChange={handleChange}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="text"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
            <Form.Label>Gender</Form.Label>
            <Form.Control
              name="gender"
              type="text"
              placeholder="Gender"
              value={userData.gender}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            clearForm();
          }}
        >
          Save Changes
        </Button>
        {/* Optional Reset Button to clear form */}
        <Button variant="warning" onClick={clearForm}>
          Reset
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;
