import React from 'react'
import { Row } from 'react-bootstrap';


export default function Words(props) {
    return (
        <code style={{ color: 'white' }}>
            <Row>
                {
                    props.words.split(' ').map((word, i) =>
                        <Row key={i} className='m-3' style={{ whiteSpace: 'nowrap' }}>
                            {
                                [...word].map((l, i) => <div key={i}  className="m-1" style={{ fontSize: '200%' }}>{l}</div>)
                            }
                        </Row>
                    )
                }
            </Row>
        </code>
    )
}
