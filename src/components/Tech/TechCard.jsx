import React from 'react'
import Card from 'react-bootstrap/Card'
import './TechCard.scss'
import FadeIn from '../vfx/FadeIn';

function TechCard(props) {
    return (
        <FadeIn>
            <div className="tech-card">
                <Card>
                    <Card.Img variant="top" src={props.image} className="t-icon" />
                </Card>
            </div>
        </FadeIn>
    )
}

export default TechCard
