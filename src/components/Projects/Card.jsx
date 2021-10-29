import React from 'react';
import "./Card.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { DiReact } from 'react-icons/di'


function card(props) {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/286x180" placeholder="pic" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <DiReact className="ri" />
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button href={props.link} variant="success" target="_blank">Link</Button>
                </Card.Body>
            </Card>
        </div>
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
