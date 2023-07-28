import React, { Component } from "react";

class Counter extends Counter {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
        count: this.state.count + 1
    })
  }

  

  render() {
    return <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}></button>
    </div>;
  }
}

export default Counter;
