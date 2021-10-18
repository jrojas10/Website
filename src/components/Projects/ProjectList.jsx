import React from 'react'
import "./Projects.scss"
import Card from './Card'

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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div >
    )
}

export default Projects
