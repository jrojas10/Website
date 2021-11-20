import React from 'react'
import "./Projects.scss"


//data
import { projects } from "../../Data/data"

//vfx
import FadeIn from '../vfx/FadeIn'

//for grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card'

function Projects() {
    return (

        <div id="Projects" className="pl">
            <Container>
                <FadeIn>
                    <h1 className="pl-title" > Projects  </h1>
                    <p className="pl-desc">
                        A Collection of projects along with the github link
                    </p>
                </FadeIn>
                <div className="pl-table">
                    <Row className="pl-row">
                        {projects.map(item => (
                            <Col xs={12} lg={6}>
                                <Card key={item.id} name={item.name} link={item.link} image={item.image} description={item.description} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div >
    )
}

export default Projects
