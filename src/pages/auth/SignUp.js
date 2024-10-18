import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    error: "",
  });
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: userData.firstName,
          lastName: userData.lastName,
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
      });

      const data = await res.json();
      // console.log(res, "on submit");
      console.log(data, "on DATA");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container style={{ marginTop: "7rem" }}>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h1 className="text-center ">Sign up</h1>
            <Form onSubmit={handleSignup}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>userName</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="userName "
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email "
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  placeholder="Password "
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignUp;
