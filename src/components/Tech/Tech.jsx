import React from 'react';
import "./Tech.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tech() {
    return (
        <Container>
            <div className="tech">
                <h1 className="tech-title">Technologies</h1>
                <div className="tech-table">
                    <Row>
                        <Col xs={6} lg={2}>React</Col>
                        <Col xs={6} lg={2}>Node.js</Col>
                        <Col xs={6} lg={2}>Express</Col>
                        <Col xs={6} lg={2}>MongoDB</Col>
                        <Col xs={6} lg={2}>Bootstrap</Col>

                    </Row>
                </div>
            </div>
        </Container>

    )
}

export default Tech
