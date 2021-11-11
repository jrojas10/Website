import React from 'react';
import "./Card.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import FadeIn from '../vfx/FadeIn'



function card(props) {
    return (
        <FadeIn>
            <div className="cr">
                <Card>
                    <div className="brdr">
                        <Card.Img variant="top" src={props.img} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                            <Button href={props.link} variant="success" target="_blank">Link</Button>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </FadeIn>
    )
}

export default card





// function Card(props) {
//     return (
//         <div className="c-card">
//             <div className="c-browser">
//                 <div className="c-circle"></div>
//                 <div className="c-circle"></div>
//                 <div className="c-circle"></div>
//             </div>
//             <a href={props.link} target="_blank" rel="noreferrer">{props.name}</a>
//             <img src={props.img} alt={props.name} />
//             <div className="but">
//                 <Button variant="info">Info</Button>
//                 <Button variant="info">Info</Button>
//             </div>
//         </div>
//     )
// }

// export default Card
