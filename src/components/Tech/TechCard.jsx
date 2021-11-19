import React from 'react'
import Card from 'react-bootstrap/Card'
import './TechCard.scss'
import Image from 'react-bootstrap/Image'

function TechCard(props) {
    return (
        <div className="tech-card">
            {/* <Image src={props.img} roundedCircle /> */}

            <Card>
                <Card.Img variant="top" src={props.img} className="t-icon" />
            </Card>
        </div>
    )
}

export default TechCard
