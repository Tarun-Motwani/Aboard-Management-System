import React,{useState} from 'react'
import '../CSS/Home.css'
// import { useNavigate } from 'react-router-dom' 
// import { useRef } from 'react'

import {BsGithub,BsTwitter,BsInstagram,BsYoutube,BsLinkedin} from "react-icons/bs"


import footerbg from '../images/footerbg.mp4'
import logo1 from '../images/logo.png'

// import AboutUs from './Aboutus'

const Footer=()=> {
  const [email, setEmail] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value)
  }

  const send = async (e) => {
    e.preventDefault();
      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (data.status === 201) {
        setEmail("");
        alert("Thanks for Subscribing us")
      } 
      else {
       alert("Invalid User"); 
    }
  }

  return (
    <> 
    <footer>
      <div className='video-bg'>
      <video autoPlay loop muted playsInline className='bg-clip-1'>
        <source src={footerbg} type="video/mp4" />
      </video>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <img src={logo1} alt='logo' className='logo'></img>
          <span className="logo_name">Gobal Academia</span>
        </div>
        <div className="media-icons">
          <a href="https://github.com/"><BsGithub size={24}/></a>
          <a href="https://twitter.com/"><BsTwitter size={24}/></a>
          <a href="https://www.instagram.com/"><BsInstagram size={24}/></a>
          <a href="https://in.linkedin.com/"><BsLinkedin size={24}/></a>
          <a href="https://www.youtube.com/"><BsYoutube size={25}/></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="Contact">Contact us</a></li>
          <li><a href="Aboutus">About us</a></li>
          <li><a href="register">Get started</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Top Countries</li>
          <li><a href="https://educationusa.state.gov/">USA</a></li>
          <li><a href="https://www.gov.uk/browse/visas-immigration/student-visas#:~:text=Study%20in%20the%20UK%20%2D%20GOV.UK">United Kingdom</a></li>
          <li><a href="https://www.studying-in-germany.org/">Germany</a></li>
          <li><a href="https://www.studyinjapan.go.jp/en/planning/about-scholarship/">Japan</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Preferences</a></li>
          <li><a href="#">Details</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Entrance Exam</li>
          <li><a href="https://www.ielts.org/">IELTS</a></li>
          <li><a href="https://www.ets.org/toefl.html">TOEFL</a></li>
          <li><a href="https://www.mba.com/exams/gmat-exam">GMAT</a></li>
          <li><a href="https://www.ets.org/gre.html">GRE</a></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <form>
                <li><input type="email" value={email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' /></li>
                <li><input type="submit" value="Submit" onClick={send} /></li>
          </form>
        </ul>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text"><a href="#">Aboard.</a>All rights reserved on 2023</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
    </div>
  </footer>
     </>
  )
}

export default Footer
