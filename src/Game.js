

export class Game {
    constructor() {
        this.reset();
    }

    loseLife() {
        this.lives--;
    }
    setWin() {
        this.win = true;
    }

    didLose() {
        return this.lives === 0;
    }
    didWin() {
        return this.win;
    };

    reset() {
        this.win = false;
        this.lives = 9;
    }
}

export default Game;