import React, { Component } from "react";

import Word from "./components/Word";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { word: "" };
  }

  componentDidMount() {
    this.getWord().then((word) => {
      console.log(word);
      this.setState({ word });
    });
  }

  async getWord() {
    return fetch("/word-getter", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((data) => data.text())
      .catch(() => {
        console.log('error!!!');
        return null;});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.word !== "" ? (
            <Word word={this.state.word} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </header>
      </div>
    );
  }
}

export default App;
