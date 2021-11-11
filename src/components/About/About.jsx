
import React from 'react'
import "./About.scss"
import kb from "../../assets/images/negativespace.jpg"
import FadeIn from '../vfx/FadeIn'
//rfce


function About() {
    return (
        <FadeIn>
            <div className="a" id="About">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={kb} alt="pic" className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-sub">about me long text
                    </p>

                    <p className="a-desc">
                        description long text
                    </p>
                </div>
            </div>
        </FadeIn>
    )

}



export default About
