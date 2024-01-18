import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
    title: "hello",
  };

  componentDidMount(): void {
    console.log("execute after rendering");
  }

  componentDidUpdate(): void {
    console.log("execute after update");
  }

  componentWillUnmount(): void {
    console.log("execute before unmount");
  }

  onClickCountUp = (): void => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  render(): JSX.Element {
    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>count up</button>
        <button onClick={this.onClickMove}>exit</button>
      </div>
    );
  }
}
