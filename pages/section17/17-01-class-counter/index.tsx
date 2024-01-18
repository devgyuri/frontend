import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
    title: "hello",
  };

  onClickCountUp = (): void => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(): JSX.Element {
    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>count up</button>
      </div>
    );
  }
}
