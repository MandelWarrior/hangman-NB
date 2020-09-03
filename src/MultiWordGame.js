import { withRouter } from 'react-router-dom';
import CharacterRevealer from './CharacterRevealer.js';
import Game from './Game.js';


export class MultiWordGame extends Game {

    constructor(words, translator) {
        super();
        this.wordGames = words.map(w => new CharacterRevealer(w, translator));
    }

    revealLetter(letter) {
        let revealed = [];
        this.wordGames.forEach(word => {
            revealed.push(word.revealLetter(letter));
        });
        if (revealed.every(i => i.length === 0)) {
            this.loseLife();
        }
        if (this.wordGames.every(g => g.isComplete())) {
            this.setWin();
        }
        return revealed;
    }

    getWords() {
        return this.wordGames.map(w => w.word);
    }

    revealUnusableLetters(keyboardLetters) {
        let revealed = [];
        this.wordGames.forEach(word => {
            let wordIndices = [];
            [...word.rawWord].forEach(l => {
                if (!keyboardLetters.includes(l)) {
                    wordIndices.push(...word.revealLetter(l));
                }
            });
            revealed.push(wordIndices);
        });
        return revealed;
    }
}

export default MultiWordGame;