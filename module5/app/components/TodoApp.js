"use client";
import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  Navbar,
  Card,
} from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (title.trim()) {
      setTodos([...todos, title]);
      setTitle("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>To-Do App</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Container */}
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            {/* Input Form */}
            <Form className="d-flex gap-2">
              <Form.Group className="flex-grow-1">
                <Form.Control
                  type="text"
                  placeholder="Enter a task..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Button variant="success" onClick={addTodo}>
                Add
              </Button>
            </Form>

            {/* To-Do List */}
            <Card className="mt-4">
              <Card.Body>
                <ListGroup>
                  {todos.map((todo, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {todo}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeTodo(index)}
                      >
                        <Trash size={16} />
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
