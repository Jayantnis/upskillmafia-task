"use client";
import React, { createContext, useState, useEffect } from "react";

// Create Context
export const TodoContext = createContext();

// Context Provider Component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Load saved todos from localStorage on mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (title) => {
    if (title.trim()) {
      setTodos([...todos, title]);
    }
  };

  // Delete a todo by index
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Clear all todos
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, clearTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
