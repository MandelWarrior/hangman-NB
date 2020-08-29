import React, { Component } from 'react';
import AsciiBox from './AsciiBox';

import { game_over } from './Hangman.json';

import './Titles.css';

export class GameOver extends Component {
    render() {
        return (
            <div className='small-font'>
                <AsciiBox lines={game_over} />
            </div>
        )
    }
}

export default GameOver;
