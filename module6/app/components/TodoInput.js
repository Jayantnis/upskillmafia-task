"use client";

import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";
import { Form, Button } from "react-bootstrap";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Control
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="primary" type="submit" className="mt-2">
        Add Todo
      </Button>
    </Form>
  );
};

export default TodoInput;
