import React, { Component } from "react";

export default class LifCycle extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("Did Mount");
  }

  componentDidUpdate() {
    console.log("Did Update");
  }

  componentWillUnmount() {
    console.log("Will Unmount");
  }

  render() {
    console.log("render");
    return (
      <div
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        {`count click: ${this.state.count}`}
      </div>
    );
  }
}
