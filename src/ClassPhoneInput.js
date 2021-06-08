import React from "react";
import formatPhoneNum from "./formatPhoneNum";

export default class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: formatPhoneNum(event.target.value) });
  }

  render() {
    return <input value={this.state.value} onChange={this.handleChange} />;
  }
}
