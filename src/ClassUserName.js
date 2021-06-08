import React from "react";

export default class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "..." };
  }

  fetchName() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
      .then((response) => response.json())
      .then((userJson) => this.setState({ name: userJson.name }));
  }

  componentDidMount() {
    this.fetchName();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ name: "..." });
      this.fetchName();
    }
  }

  render() {
    return (
      <>
        <span>Name: {this.state.name}</span>
        <br />
        <span>Label: {this.props.label}</span>
      </>
    );
  }
}
