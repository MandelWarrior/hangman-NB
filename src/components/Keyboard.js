import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';


export class Keyboard extends Component {

    constructor(props) {
        super(props);

        this.state = {disabledButtons: []};
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Col>
                        {
                            ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"].map(
                                row => <Row className="justify-content-center" key={row}>
                                    {
                                        [...row].map(l => <Button disabled={this.state.disabledButtons.includes(l)} onClick={() => this.props.onKeyPressed(l)} className="m-1 btn-lg" key={l}>{l}</Button>)
                                    }
                                </Row>
                            )

                        }
                    </Col>
                </Container>
            </div >
        )
    }

    disableKey(l) {
        this.state.disabledButtons.push(l);
        this.setState({});
    }

    enableKey(l) {
        this.state.disabledButtons.remove(l);
        this.setState({});
    }

    enableAll(l) {
        this.setState({disabledButtons: []});
    }
}

export default Keyboard;
