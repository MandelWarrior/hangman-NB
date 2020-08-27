import React, { Component } from 'react'
import Letter from './Letter';
import './Word.css';

export class Word extends Component {

    render() {
        var letters = [];
        [...this.props.word].forEach((char, index) => {
            letters.push(<Letter key={index} letter={char}/>);
        });

        return (
            <div className='word'>{letters}</div>
        )
    }
}

export default Word
