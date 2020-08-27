import React, { Component } from 'react';

import { Grid, Container, Row, Col, Button } from 'react-bootstrap';


export class Keyboard extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Col>
                        {
                            ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"].map(
                                row => <Row className="justify-content-center">
                                    {
                                        [...row].map(l => <Button className="m-1">{l}</Button>)
                                    }
                                </Row>
                            )

                        }
                    </Col>
                </Container>
            </div >
        )
    }
}

export default Keyboard;
