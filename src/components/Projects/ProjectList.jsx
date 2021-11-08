import React from 'react'
import "./Projects.scss"
import Card from './Card'
import { projects } from "../../Data/data"

function Projects() {
    return (
        <div className="pl" id="Projects">
            <div className="pl-text">
                <h1 className="pl-title" > Projects  </h1>
                <p className="pl-desc">
                    A Collection of projects along with the github link
                </p>
            </div>
            <div className="pl-list">
                {projects.map(item => (
                    <Card key={item.id} name={item.name} link={item.link} img={item.image} description={item.description} />
                ))}
            </div>
        </div >
    )
}

export default Projects
