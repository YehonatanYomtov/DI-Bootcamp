import { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState(({ counter }) => {
      if (counter + 1 === 5) {
        throw new Error("I crashed!");
      }
      return { counter: counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      </div>
    );
  }
}

export default BuggyCounter;
