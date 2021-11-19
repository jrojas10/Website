import React from 'react'
import Card from 'react-bootstrap/Card'
import './TechCard.scss'


function TechCard(props) {
    return (
        <div className="tech-card">


            <Card>
                <Card.Img variant="top" src={props.img} className="t-icon" />
            </Card>
        </div>
    )
}

export default TechCard
