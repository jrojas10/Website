import React from 'react'
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import './Contact.scss';
import { useRef } from 'react';


function Contact() {
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="c" id="Contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> Contact Me </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +1 (562) 271-8301
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            jrojasbf@gmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"> <b>Get in Touch</b> </p>
                    <form className="form" ref={formRef} onSubmit={handleSubmit}>
                        <input className="c-input" type="text" placeholder="Name" name="user_name" />
                        <input className="c-input" type="text" placeholder="Subject" name="user_subject" />
                        <input className="c-input" type="text" placeholder="Email" name="user_email" />
                        <textarea className="textarea" rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
