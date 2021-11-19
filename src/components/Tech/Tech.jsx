import React from 'react';
//scss
import FadeIn from '../vfx/FadeIn';
import "./Tech.scss";

//for table
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//component
import TechCard from './TechCard';


//import list of technologies
import { technology } from '../../Data/TechData';

function Tech() {
    return (
        <div id="Technology" className="t">
            <Container>

                <div className="tech" >
                    <FadeIn>
                        <h1 className="tech-title">Technologies</h1>
                    </FadeIn>

                    <FadeIn>
                        <div className="tech-table">
                            <Row className="tech-row">
                                {technology.map(item => (
                                    <Col xs={6} lg={2}> <TechCard image={item.image} /> </Col>
                                ))}
                            </Row>
                        </div>
                    </FadeIn>
                </div>

            </Container>
        </div>
    )
}

export default Tech
