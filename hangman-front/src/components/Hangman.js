import React, { Component } from 'react';
import { graphs } from './Hangman.json';

import AsciiBox from './AsciiBox';



export class Hangman extends Component {

    render() {
        return (
            <div style={{ fontSize: '2em' }}>
                <AsciiBox lines={graphs[graphs.length - this.props.lives - 1]}/>
            </div>
        )
    }
}

export default Hangman;
