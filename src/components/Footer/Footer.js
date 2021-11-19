import React, { Component } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import "./Footer.scss"




class Footer extends Component {
    render() {
        return (
            <div className="ftr">
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <svg className="bi" width="30" height="24"></svg>
                            </a>
                            <p> 2021   Juan Rojas</p>

                            <a href="https://github.com/jrojas10" target="_blank" rel="noreferrer" className="ml-3 text-muted text-decoration-none">
                                <FaGithub className="icon" />
                            </a>

                            <a href="https://www.linkedin.com/in/juan-rojas-1ab140184/" target="_blank" rel="noreferrer" className="ml-3 text-muted text-decoration-none">
                                <FaLinkedin className="icon" />
                            </a>




                        </div>
                    </footer>
                </div>
            </div>
        )

    }
}
export default Footer



