import React from 'react'
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import ModalForm from './ModalForm';
import Form from 'react-bootstrap/Form'
import './Contact.css';




function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [modal, setModal] = useState(false);
    const [validated, setValidated] = useState(false);

    const closeModal = () => {
        setModal(false);
    }


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            console.log('invalid');
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);//these are the messages that appear when the form is invalid

        } else {
            e.preventDefault();
            setDone(true);
            setModal(true);
            console.log("Submitted");
            emailjs.sendForm('service_f42kafi', 'template_313csrc', formRef.current, process.env.REACT_APP_USERID)
                .then((result) => {
                    console.log(result.text);
                    setDone(true);
                }, (error) => {
                    console.log(error.text);
                });
        }
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

                    <Form className="form" ref={formRef} onSubmit={handleSubmit} noValidate validated={validated}>
                        <Form.Group>
                            <input type="text" className="c-input" name="user_name" placeholder="Name" required />
                            <Form.Control.Feedback type="invalid"> Please enter a name </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <input required className="c-input" type="text" placeholder="Subject" name="user_subject" />
                            <Form.Control.Feedback type="invalid"> Please enter a subject </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <input required className="c-input" type="text" placeholder="Email" name="user_email" />
                            <Form.Control.Feedback type="invalid"> Please enter an email </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <textarea required className="textarea" rows="5" placeholder="Message" name="message" />
                            <Form.Control.Feedback type="invalid"> Please enter a message </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <button type="submit">Submit</button>
                        {done && <ModalForm show={modal} onHide={closeModal} />}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact
