import React, { Component } from "react";

import Words from "./components/Words";
import Hangman from "./components/Hangman";

import "./App.css";
import GameOver from "./components/GameOver";
import Win from "./components/Win";
import Title from "./components/Title";

import { Button, Row, Navbar, NavDropdown, Container } from "react-bootstrap";
import Keyboard from "./components/Keyboard";
import MultiWordGame from "./MultiWordGame";

import WordLists from "./WordLists.json";
import Languages from "./Languages.json";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, game: null, selectedWordList: WordLists[0] };
  }

  componentDidMount() {
    this.reloadGame();
  }

  reloadGame() {
    this.loadWords()
      .catch((e) => alert(e))
      .then(() => this.newGame());
  }

  getCurrentLanguage() {
    return Languages.find(l => l.name === this.state.selectedWordList.language);
  }


  async loadWords() {
    var response = await fetch(process.env.PUBLIC_URL + "/" + this.state.selectedWordList.file, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });

    if (!response.ok) {
      this.wordSet = null;
      throw new Error('Error fetching Word List!');
    }

    let text = await response.text();

    this.wordSet = text.split('\n').filter(w => w.length > 0);
  }

  onChangeLanguage(wordList) {
    this.setState({ game: null, selectedWordList: wordList },
      () => {
        this.reloadGame();
      }
    );
  }

  newGame() {
    let phrase = this.wordSet[Math.floor(Math.random() * this.wordSet.length)];
    let game = new MultiWordGame(phrase.split(' '), this.getCurrentLanguage().characterSubstitution);
    this.setState({ playing: true, game }, () => {
      this.keyboard.enableAll();
      this.state.game.revealUnusableLetters(this.getCurrentLanguage().keyboardRows.join(''));
      this.setState({});
    });
  }

  keyboardPressed(k) {
    this.keyboard.disableKey(k);
    this.state.game.revealLetter(k);

    let lose = this.state.game.didLose();
    let win = this.state.game.didWin();
    if (lose || win) {
      this.setState({ playing: false, win, lose });
    } else {
      this.setState({});
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar fixed="top" bg="dark">
          <Navbar.Collapse>
            <NavDropdown title="Language">
              {
                WordLists.map(l => <NavDropdown.Item key={l.name} onClick={() => this.onChangeLanguage(l)}>{l.name}</NavDropdown.Item>)
              }
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
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
              <Row className='justify-content-center'>
                <div style={{ left: '5%' }}>
                  <Hangman lives={this.state.game.lives} />
                </div>
                <Container className='justify-content-center'>

                  <Row>
                    <Words words={this.state.playing ? this.state.game.getLetters() : this.state.game.getRawLetters()} />
                  </Row>
                  <Row>
                    {
                      this.state.playing
                        ? <Keyboard
                          keyRows={Languages.find(l => l.name === this.state.selectedWordList.language).keyboardRows}
                          ref={(instance) => this.keyboard = instance}
                          onKeyPressed={this.keyboardPressed.bind(this)}
                        />
                        : <Button className="m-3" onClick={() => { this.newGame(); }}>Restart</Button>
                    }
                  </Row>
                </Container>
              </Row>
          }
        </header>
      </div>
    );
  }
}

export default App;
