import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.setState({ time: Date() }), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <span>{this.state.time}</span>;
  }
}
