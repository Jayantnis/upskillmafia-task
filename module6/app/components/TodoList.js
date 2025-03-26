"use client";

import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import { ListGroup, Button, Form } from "react-bootstrap";

const TodoList = () => {
  const { todos, deleteTodo, clearAll } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search tasks..."
        className="mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ListGroup>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <ListGroup.Item
              key={todo.id}
              className="d-flex justify-content-between"
            >
              {todo.text}
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No tasks found</ListGroup.Item>
        )}
      </ListGroup>

      {todos.length > 0 && (
        <Button variant="danger" className="mt-3" onClick={clearAll}>
          Clear All
        </Button>
      )}
    </div>
  );
};

export default TodoList;
