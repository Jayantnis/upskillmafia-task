"use client";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";

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
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a task..."
            />
            <button className="btn btn-primary" onClick={addTodo}>
              Add
            </button>
          </div>

          <ul className="list-group">
            {todos.map((todo, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {todo}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeTodo(index)}
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
