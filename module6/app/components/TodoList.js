"use client";
import React, { useContext, createContext, useState, useEffect } from "react";
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";

import { Trash, Search } from "react-bootstrap-icons";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo, clearTodos } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter todos based on search input
  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <Search />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {/* Todo List */}
      <ListGroup>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {todo}
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTodo(index)}
              >
                <Trash size={16} />
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No tasks found.</ListGroup.Item>
        )}
      </ListGroup>

      {/* Clear All Button */}
      {todos.length > 0 && (
        <Button className="mt-3 w-100" variant="danger" onClick={clearTodos}>
          Clear All
        </Button>
      )}
    </div>
  );
};

export default TodoList;
