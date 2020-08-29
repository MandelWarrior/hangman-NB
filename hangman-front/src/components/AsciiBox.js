import React, { Component } from 'react'

import "./AsciiBox.css";

export class AsciiBox extends Component {
    render() {
        return (
            <div>
                <code className="ascii-box">
                    {
                        //this.props.lines.join('\n')
                        this.props.lines.map((line, i) => <p key={i} className="m-0 p-0 ascii-box-line">{line}</p>)
                    }
                </code>
            </div>
        )
    }
}

export default AsciiBox
