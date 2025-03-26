import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="mt-5 text-center">
      <h1>Welcome to My App</h1>
      <p>Navigate to different pages using the navbar above.</p>
      <Link to="/form" className="btn btn-primary">
        Go to Form
      </Link>
    </Container>
  );
}
