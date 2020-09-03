import React, { Component } from 'react'
import Letter from './Letter';
import './Word.css';

export class Word extends Component {

    constructor(props) {
        super(props);
        this.letters = [];
    }

    setLetterRef(i, instance) {
        if (instance === null)
            this.letters.splice(i);
        this.letters[i] = instance;
    }

    render() {
        this.letters.length = 0;

        return (
            <div className='word justify-content-center m-3'>
                {
                    [...this.props.word].map((char, index) =>
                        <Letter ref={this.setLetterRef.bind(this, index)} key={index} letter={char} />)
                }
            </div>
        )
    }

    setLetterHidden(i, state) {
        this.letters[i].setHidden(state);
    }

    showAllLetters() {
        this.letters.forEach(l => l.setHidden(false));
    }

    hideAllLetters() {
        this.letters.forEach(l => l.setHidden(true));
    }
}

export default Word
