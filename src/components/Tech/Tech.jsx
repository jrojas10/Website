import React from 'react';
//scss
import "./Tech.scss";

//for table
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//svg
import react from '../../assets/images/react.svg';
import Nodejs from '../../assets/images/Nodejs.svg';
import TechCard from './TechCard';
import express from '../../assets/images/express.svg';
import mongodb from '../../assets/images/mongodb.svg';
import bootstrap from '../../assets/images/bootstrap.svg';
import python from '../../assets/images/python.svg';
import jupyter from '../../assets/images/jupyter.svg';
import numpy from '../../assets/images/numpy.svg';
import pandas from '../../assets/images/pandas.svg';
import git from '../../assets/images/git.svg';

function Tech() {
    return (
        <Container>
            <div className="tech">
                <h1 className="tech-title">Technologies</h1>
                <div className="tech-table">
                    <Row className="tech-row">
                        <Col xs={6} lg={2}><TechCard img={mongodb} /></Col>
                        <Col xs={6} lg={2}><TechCard img={express} /></Col>
                        <Col xs={6} lg={2}><TechCard img={react} title="React" /></Col>
                        <Col xs={6} lg={2}><TechCard img={Nodejs} /></Col>
                        <Col xs={6} lg={2}><TechCard img={bootstrap} /></Col>
                    </Row>

                    <Row className="tech-row">
                        <Col xs={6} lg={2}><TechCard img={python} /></Col>
                        <Col xs={6} lg={2}><TechCard img={jupyter} /></Col>
                        <Col xs={6} lg={2}><TechCard img={numpy} /></Col>
                        <Col xs={6} lg={2}><TechCard img={pandas} /></Col>
                        <Col xs={6} lg={2}><TechCard img={git} /></Col>
                    </Row>
                </div>
            </div>
        </Container>

    )
}

export default Tech
