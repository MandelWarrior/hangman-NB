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
    var res = await fetch("/word-getter", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Not OK response");
        return response.text();
      })
      .catch(() => {
        console.log('error!!!');
        return null;
      });
    return res;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.word === null ? <h1>Error!!</h1> : this.state.word !== "" ? (
              <Word word={this.state.word} />
            ) : (
                <h1>Cargando...</h1>
              )
          }
        </header>
      </div>
    );
  }
}

export default App;
