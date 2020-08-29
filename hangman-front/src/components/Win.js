import React, { Component } from 'react'
import AsciiBox from './AsciiBox';

import { game_win } from './Hangman.json';

import './Titles.css';

export class Win extends Component {
    render() {
        return (
            <div className='small-font'>
                <AsciiBox lines={game_win} />
            </div>
        )
    }
}

export default Win;
