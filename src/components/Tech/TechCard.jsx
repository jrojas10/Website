import React from 'react'
import Card from 'react-bootstrap/Card'
import './TechCard.scss'

function TechCard(props) {
    return (
        <div className="tech-card">
            <Card>
                <Card.Img variant="top" src={props.img} className="icon" />
                <div className="tech-card-title">

                    <Card.Title >{props.title}</Card.Title>
                </div>

            </Card>
        </div>
    )
}

export default TechCard
