import React, { Component } from "react";

import Word from "./components/Word";
import Hangman from "./components/Hangman";

import "./App.css";
import GameOver from "./components/GameOver";
import Win from "./components/Win";
import Title from "./components/Title";

import { Button, Row, Col } from "react-bootstrap";
import Keyboard from "./components/Keyboard";
import OneGame from "./OneGame";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, game: null };
  }

  componentDidMount() {
    this.loadWords().then(() => this.newGame());
  }

  async loadWords() {
    var response = await fetch(process.env.PUBLIC_URL + "/words_2.txt", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });

    /*
    let buffer = await response.arrayBuffer();

    let decoder = new TextDecoder("iso-8859-1");
    let text = decoder.decode(buffer);
    */

    let text = await response.text();

    this.words = text.split('\n');
  }

  newGame() {
    let word = this.words[Math.floor(Math.random() * this.words.length)];
    let game = new OneGame(word);
    this.setState({ playing: true, game }, () => { this.keyboard.enableAll(); this.word.hideAllLetters(); });
  }

  keyboardPressed(k) {
    this.keyboard.disableKey(k);
    let indices = this.state.game.revealLetter(k);

    indices.forEach((i) => {
      this.word.setLetterHidden(i, false);
    });
    let lose = this.state.game.didLose();
    let win = this.state.game.didWin();
    if (lose || win) {
      this.word.showAllLetters();
      this.setState({ playing: false });
      this.setState({ win, lose });
    } else {
      this.setState({});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.playing
              ? <Title />
              : this.state.win
                ? <Win />
                : <GameOver />

          }
          {
            this.state.game === null ?
              <h1>Loading...</h1>
              :
              <Row >
                <Hangman lives={this.state.game.lives} />
                <Col className="align-self-center">
                  <div className="align-self-center">
                    <Word ref={(instance) => { this.word = instance; }} word={this.state.game.word} />
                  </div>
                  {
                    this.state.playing
                      ? <Keyboard ref={(instance) => this.keyboard = instance} onKeyPressed={this.keyboardPressed.bind(this)} />
                      : <Button className="m-3" onClick={() => { this.newGame(); }}>Restart</Button>
                  }
                </Col>
              </Row>
          }
        </header>
      </div>
    );
  }
}

export default App;
