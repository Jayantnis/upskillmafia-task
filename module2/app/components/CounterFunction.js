"use client";
import React, { useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-3">Functional Component Counter</h2>
      <h1 className="display-4">{count}</h1>
      <div className="mt-3">
        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            setCount(count - 1);
            if (count <= 0) {
              setCount(0);
            }
          }}
        >
          -
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterFunction;
