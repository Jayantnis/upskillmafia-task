import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function FormPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErrors("Enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setErrors("Password must be at least 8 characters.");
      return;
    }
    setErrors("");
    alert("Form submitted successfully!");
  };

  return (
    <Container className="mt-5">
      <h2>Form Page</h2>
      {errors && <Alert variant="danger">{errors}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
