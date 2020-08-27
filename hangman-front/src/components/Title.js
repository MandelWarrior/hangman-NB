import React, { Component } from 'react'
import AsciiBox from './AsciiBox';

import { title } from './Hangman.json';

import './Titles.css';

export class Title extends Component {
    render() {
        return (
            <div className='small'>
                <AsciiBox lines={title} />
            </div>
        )
    }
}

export default Title;
