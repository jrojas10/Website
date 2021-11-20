import React from 'react';
import "./Card.scss";
import Card from 'react-bootstrap/Card'
import FadeIn from '../vfx/FadeIn'
import { FaGithub } from 'react-icons/fa';


function card(props) {
    return (
        <FadeIn>
            <div className="cr">
                <Card>
                    <div className="brdr">
                        <div className="resize">
                            <Card.Img variant="top" src={props.image} />
                        </div>
                        <Card.Body>
                            <Card.Title className="underline">{props.name}</Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                            <a href={props.link} target="_blank" rel="noreferrer" className="ml-3 text-muted text-decoration-none">
                                <FaGithub className="gi" />
                            </a>

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
