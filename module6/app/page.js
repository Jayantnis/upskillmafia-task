"use client";

import React from "react";
import { Container } from "react-bootstrap";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./TodoContext";

export default function Home() {
  return (
    <>
      <TodoProvider>
        <Container className="mt-4">
          <h2 className="text-center">To-Do List</h2>
          <TodoInput />
          <TodoList />
        </Container>
      </TodoProvider>
    </>
  );
}
