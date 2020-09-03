import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import Word from './Word';



export class Words extends Component {
    constructor(props) {
        super(props);
        this.words = new Map();
    }

    getWords() {
        return new Map(Array.from(this.words.entries()).filter((k, value) => value != null));
    }

    render() {
        return (
            <div>
                <Row>
                    {
                        this.props.words.map((w, i) => <Word key={w} ref={(ins) => this.words.set(i, ins)} word={w} />)
                    }
                </Row>
            </div>
        )
    }

    revealLetters(indices) {
        for (let i = 0; i < indices.length; i++) {
            indices[i].forEach(li => this.getWords().get(i).setLetterHidden(li, false));
        }
    }

    showAllLetters() {
        Array.from(this.getWords().values()).forEach(w => w.showAllLetters());
    }

    hideAllLetters() {
        Array.from(this.getWords().values()).forEach(w => w.hideAllLetters());
    }
}

export default Words
