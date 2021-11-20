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





