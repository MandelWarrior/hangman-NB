import React, { Component } from "react";

export class Letter extends Component {

  constructor(props) {
    super(props);
    this.state = {hidden: true};
  }

  render() {
    //return <div className="letter p-2">{this.state.hidden ? this.props.letter.toLowerCase() : this.props.letter}</div>;
    return <div className="letter p-2">{this.state.hidden ? '_' : this.props.letter}</div>;
  }

  setHidden(state) {
    this.setState({ hidden: state });
  }
}

export default Letter;
