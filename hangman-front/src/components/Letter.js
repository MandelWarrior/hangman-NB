import React, { Component } from "react";
import "./Letter.css";

export class Letter extends Component {

  constructor(props) {
    super(props);
    this.state = {hidden: false};
  }

  render() {
    return <div className="letter">{this.state.hidden ? '_' : this.props.letter}</div>;
  }
}

export default Letter;
