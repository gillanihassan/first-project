import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
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
            <h1 className="text-center ">Sign In</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  required
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <p>
              Do not have account <a href="/signup">Signup</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
