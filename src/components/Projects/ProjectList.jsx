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

        <div className="pl" id="Projects">
            <FadeIn>
                <div className="pl-text">
                    <h1 className="pl-title" > Projects  </h1>
                    <p className="pl-desc">
                        A Collection of projects along with the github link
                    </p>
                </div>
            </FadeIn>
            <div className="pl-list">
                {projects.map(item => (
                    <Card key={item.id} name={item.name} link={item.link} img={item.image} description={item.description} />
                ))}
            </div>
        </div >
    )
}

export default Projects
