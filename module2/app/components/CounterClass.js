"use client";
import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrease = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
    if (this.state.count <= 0) {
      this.setState({ count: 0 });
    }
  };

  render() {
    return (
      <div className="container text-center mt-5">
        <h2 className="mb-3">Class Component Counter</h2>
        <h1 className="display-4">{this.state.count}</h1>
        <div className="mt-3">
          <button className="btn btn-danger mx-2" onClick={this.decrease}>
            -
          </button>
          <button className="btn btn-success mx-2" onClick={this.increase}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
