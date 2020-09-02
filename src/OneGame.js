const TRIES = 6;

function stringTranslate(str, setFrom, setTo) {

    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        newStr += setFrom.includes(str[i]) ? setTo[setFrom.indexOf(str[i])] : str[i];
    }
    return newStr;
}

export class OneGame {
    constructor(word) {
        this.lives = TRIES;

        this.word = word.toUpperCase();
        this.rawWord = stringTranslate(this.word, 'ÁÉÍÓÚÄËÏÖÜ', 'AEIOUAEIOU');

        this.usedLetters = [];
        this.hiddenLetters = [];
        for (var i = 0; i < word.length; i++) {
            this.hiddenLetters.push(true);
        }
    }

    revealLetter(letter) {
        let indices = [];

        if (!this.usedLetters.includes(letter)) {
            this.usedLetters.push(letter);

            for (var i = 0; i < this.word.length; i++) {
                if (this.rawWord[i] === letter) {
                    indices.push(i);
                    this.hiddenLetters[i] = false;
                }
            }

            if (indices.length === 0) {
                this.lives--;
            }
        }

        return indices;
    }

    didLose() {
        return this.lives === 0;
    }

    didWin() {
        return this.hiddenLetters.every(h => !h);
    }

    getLetters() {
        return this.word.map((l, i) => this.hiddenLetters[i] ? '_' : l);
    }

}


export default OneGame;