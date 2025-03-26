"use client";
import React, { useContext, createContext, useState, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle(""); // Clear input field
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Enter a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoInput;
