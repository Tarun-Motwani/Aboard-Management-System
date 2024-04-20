import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
 import { AiOutlineBars } from "react-icons/ai";
// import '../images/logo.png'
import '../CSS/Navbar.css'
import { NavLink,useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { useRef } from 'react'



function Navbar() {
  const navRef=useRef();
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  const navigatelogin = useNavigate()
  return (
    <> 
    <div className="navg">
      <nav ref={navRef}>
      <div className='link'>
        <img src={logo} alt='logo' className='logo'></img>
        </div>
        <ul>
          <li><p><NavLink to="/"><span></span>HOME</NavLink></p></li>
          <li><p><NavLink to="/SearchExplore"><span></span>EXPLORE</NavLink></p></li>
          <li><p><NavLink to="/FAQPage"><span></span>FAQs</NavLink></p></li>
          <li><p><NavLink to="/Connect"><span></span>CONNECT</NavLink></p></li>
          <button className='nav-btn-class'onClick={showNavbar}><i className='fa fa-times'></i></button>
          <div className='navlog-btn'>
          <button className='navlogin' onClick={() => navigatelogin("/login")}><b>Login</b></button>
          </div>
        </ul>
        <button className='nav-btn'onClick={showNavbar}><AiOutlineBars/></button>
        
      </nav>
     
    </div>
    </>
  )
}

export default Navbar
