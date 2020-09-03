import CharacterRevealer from "./CharacterRevealer";
import Game from "./Game";


export class OneWordGame extends Game {
    constructor(word, characterTranslation) {
        super();

        this.characterRevealer = new CharacterRevealer(word, characterTranslation);
        this.usedLetters = [];
    }

    revealLetter(letter) {
        if (this.usedLetters.includes(letter)) {
            return [];
        }

        this.usedLetters.push(letter);

        let indices = this.characterRevealer.revealLetter(letter);

        if (indices.length == 0) {
            this.loseLife();
        }

        if (this.characterRevealer.isComplete())
            this.setWin();

        return indices;
    }

    getWord() {
        return this.characterRevealer.word;
    }
}


export default OneWordGame;