
function stringTranslate(str, setFrom, setTo) {

    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        newStr += setFrom.includes(str[i]) ? setTo[setFrom.indexOf(str[i])] : str[i];
    }
    return newStr;
}

export class CharacterRevealer {
    constructor(word, characterTranslation) {
        this.word = word.toUpperCase();
        if (characterTranslation != null) {
            this.rawWord = stringTranslate(this.word, characterTranslation.from, characterTranslation.to);
        } else {
            this.rawWord = this.word;
        }

        this.hiddenLetters = [];
        for (var i = 0; i < word.length; i++) {
            this.hiddenLetters.push(true);
        }
    }

    revealLetter(letter) {
        let indices = [];

        for (var i = 0; i < this.word.length; i++) {
            if (this.rawWord[i] === letter) {
                indices.push(i);
                this.hiddenLetters[i] = false;
            }
        }

        return indices;
    }

    isComplete() {
        return this.hiddenLetters.every(h => !h);
    }

    getLetters() {
        return this.word.map((l, i) => this.hiddenLetters[i] ? '_' : l);
    }
}


export default CharacterRevealer;