import React from 'react';
import '../CSS/Contact.css'
//import { useNavigate } from 'react-router-dom' 
import {AiOutlineHome} from "react-icons/ai"
import Footer from './Footer'

import logoContactus from '../images/logo.png'


class ContactUs extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    alert(`Thank you for your message, ${this.state.name}! We will get back to you soon.`);
    event.preventDefault();
  }

  render() {
    
    return (
    <>
    <div className='contactus-bg'>
      <img src={logoContactus} alt='logoContactus' className='logoContactus'></img>
      <h1>Global Academia</h1>
    <div className='contactus'>
      <div className='contactus-contents'>
        <h2>Contact Us</h2><br/>
        <h6>Global Academia is an education consultancy that helps students pursue their studies in foreign countries. They offer personalized support and advice to students in selecting the right program and university, as well as assistance with the visa process and settling into a new country.
        Contact Global Academia today to learn more about how they can help you pursue your education abroad.<br/><br/>
                <div className="contactus-center"><a href='./Aboutus.js'>
                  <button className="contactus-btn">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    <span>Learn More</span>
                  </button></a>
                </div>
        </h6>
        </div>
        <div className='contactus-div'>
        <form onSubmit={this.handleSubmit} className='contactus-form'>
          <div className='contact-input-form'>
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </div>
       
          <div className='contact-input-form'>
            <label>Email:</label>
            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          
          <div className='contact-input-form'>
            <label>Message:</label>
            <textarea value={this.state.message} onChange={this.handleMessageChange} />
          </div>

          <button>Send</button>
        </form>
        </div>
    </div>
    </div>
    <Footer/>
    <a href="./">
      <div className="menu">
            <AiOutlineHome />
      </div>
    </a>
    </>
    );
  }
}
export default ContactUs;




