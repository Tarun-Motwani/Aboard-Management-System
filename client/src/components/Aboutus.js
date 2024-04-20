import React, { useState } from "react";
import "../CSS/Aboutus.css";

const AboutUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsValid(true);
    };

return (
    <div className="background-aboutus">
    <div className="about-us">
    <div className="header-aboutus">
        <h1>Global Academia</h1>
        <p className="subheader-aboutus">Studying Abroad Made Easy</p>
    </div>
    <div className="container-aboutus">
        <div className="text-container-aboutus">
        <h2><b>About Us</b></h2>
        <p>
            Global Academia is a leading education consulting firm that provides
            expert guidance to students who want to study abroad. Our team of
            experienced professionals helps students choose the right academic
            program, select the best universities, and navigate the complex
            admissions process.
        </p>
        <p>
            At Global Academia, we understand that studying abroad can be a
            life-changing experience. That's why we are committed to providing
            personalized and comprehensive support to our students at every
            step of the way. Our goal is to help students achieve their
            academic and career goals, while also broadening their horizons and
            enhancing their personal growth.
        </p>
        </div>

        <div className="image-container-aboutus">
        <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/6_Best_Places_to_Study_Abroad_v2.jpg"
            alt="Students studying abroad"
            className="about-us-image"
        />
        <div className="image-overlay">
            <div className="overlay-text">Explore the World with Us</div>
        </div>
        </div>
    </div>

    <div className="testimonials-aboutus">
        <div className="testimonial-aboutus">
        <p>
            "Global Academia made my dream of studying in the UK a reality.
            Their team of experts helped me navigate the complex application
            process and secure admission to a top-ranked university. I am
            grateful for their support and guidance throughout my academic
            journey."
        </p>
        <p className="testimonial-author-aboutus">- John Doe, UK</p>
        </div>

        <div className="testimonial-aboutus">
        <p>
            "I highly recommend Global Academia to anyone who is considering
            studying abroad. Their team is knowledgeable, professional, and
            dedicated to helping students achieve their goals. Thanks to them,
            I was able to get admitted to my dream university in Australia."
        </p>
        <p className="testimonial-author-aboutus">- Jane Smith, Australia</p>
        </div>
    </div>

    <div className="contact-us-aboutus">
        <h2><b>Contact Us</b></h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group-aboutus">
            <label htmlFor="name">E-mail:</label>
            <input
            type="text"
            id="Email"
            name="Email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            />
    </div>
    <div className="form-group-aboutus">
    <label htmlFor="message">Message:</label>
    <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            required
            ></textarea>
    </div>
    <button type="submit">Submit</button>
    </form>
    {isValid && (
    <div className="form-success-aboutus">
    <b>Thank you for contacting us, {name}! We will get back to you soon.</b>
    </div>
    )}
    </div>
    </div>
    </div>
    );
    };
    
    export default AboutUs;