import React from 'react'
import CountUp from 'react-countup'
import { useNavigate } from 'react-router-dom' 



//ICONS 
// import {BsGithub,BsTwitter,BsInstagram,BsYoutube,BsLinkedin} from "react-icons/bs"
 

//BUTTON FUNCTION
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import register from '../components/Register'


//IMAGES
import loan from '../images/loan.png'
import visa from '../images/visa.png'
import scholar from '../images/scholar.png'
import success from '../images/success.png'
import exploreuni from '../images/exploreuni.png'
import loanpic from '../images/loanpic.png'
import connect from '../images/connect.png'

import '../CSS/Home.css'

const Home=()=> {
  
  const navigatelogin = useNavigate()
  return (<>
  <Navbar />
  <div className="Home">
    <div className='mainpage'><br/><br/><br/><br/>
      <h1>If studying abroad is your<br/> dream, making it simple is ours!</h1>
      <br/>
      <p>With the best study abroad advice, we'll make your dreams a reality.</p>
    </div><br/><br/><div className='getbutton'>
    <button className='getstarted' onClick={() => navigatelogin("/register")}><b>Get Started</b></button>
    </div>
    <div className='info'>
      Creating dreams into reality
      <p>From shortlisting universities to guiding you on SOPs, LORs, 
        scholarships, loan & visa, we cater to all of your study abroad needs! <br/>
        No tall claims, we back the efficiency of our consultancy with stats. 
        Check for yourselves!</p>


        <a href='./VisaAnalytics'>
        <div className='photos'>
        <div class="image-caption">
          <img src={success} alt='success' className='success'></img>
          <p><h1>  
            <CountUp className="CountUp-1" start={1999} end={4000} duration={5}/>+
          </h1>" Successful admits "</p></div>
        <div class="image-caption">
          <img src={scholar} alt='scholar' className='scholar'></img>
          <p><h1>$<CountUp className="CountUp-2" start={0} end={30} duration={4}/> M</h1>" Scholarships Granted "</p></div>
        <div class="image-caption">
          <img src={loan} alt='loan' className='loan'></img>
          <p><h1><CountUp className="CountUp-3" start={999} end={2500} duration={5}/> +Cr</h1>" Loan Sanctioned "</p></div>
        <div class="image-caption">
          <img src={visa} alt='visa' className='visa'></img>
          <p><h1><CountUp className="CountUp-4" start={1} end={98} duration={4}/>%</h1>" Visa Success Rate "</p></div>
        </div>
        </a>
        </div>
       

       <section className='info2'>
        <b>One platform,Many features</b>
        <p>"Discover the world, Expand your horizons with us"</p>
        <div className='info2-content'>
          <img src={exploreuni} alt='exploreuni' className='img1'></img>
          <div className='explore-1'>
            <b>Explore Universities around the globe</b>
            <p>"Eliminate the hassle of sifting through numerous browser tabs when searching for <br/>
            universities abroad. With over 2,000 options available, finding your ideal school has <br/>
            never been easier.Our user-friendly platform also offers convenient filters and sorting <br/>
            options to make your experience seamless."</p>
            <button className='btn1' onClick={() => navigatelogin("/searchExplore")}><b>Explore Universities</b></button>
          </div>
          </div>
          <div className='info2-content2'>
          <div className='explore-2'>
            <b>Connect with aspirants like you!</b>
            <p>Join us to Connect, a community of support and advice, where study abroad <br/>hopefuls, alumni,
              and counselors come together. Network and connect <br/>with like-minded individuals to share 
              your aspirations.</p>
            <button className='btn2' onClick={() => navigatelogin("/Connect")}><b>Connect</b></button>
            </div>
          <img src={connect} alt='connect..' className='img2'></img>
          </div>

          <div className='info2-content3'>
          <img src={loanpic} alt='loanpic' className='img3'></img>
          <div className='explore-3'>
            <b>Safely fund your aspirations.</b>
            <p>Let our knowledgeable finance advisors ease your worries about education loans. <br/>
              Whether you need a collateral or non-collateral loan, they will help you get the<br/> 
              best interest rates available. They will also provide advice on ROI and assist you <br/>
              in obtaining a loan through a straightforward and seamless process.</p>
            <button className='btn3' onClick={() => navigatelogin("/LoanFinder")}><b>Loan Finder</b></button>
          </div>
          </div>
      </section>

 {/* testimonial */}
 <section className="testimonial">
                <div className="title-text">
                    <p>TESTIMONIAL</p>
                    <h2>From our Students</h2>
                    </div>
                    <div className="feedback-row">
                        <div className="feedback-col">
                        <div className="user">
                        <img src={success} alt='success'/>
                            <div className="user-info">
                                <h4>HARISH <i className="fa fa-twitter" aria-hidden="true"></i></h4>
                                <small>@harish</small>
                            </div>
                        </div>
                            <p>Studying abroad was one of the most life-changing experiences I have had and 
                              I am grateful for the opportunity. The culture shock was invigorating and pushed me
                              out of my comfort zone, leading to personal growth. The education system was top-notch 
                              and the professors were knowledgeable and passionate about their subjects.The application process 
                              to finding housing and making new friends was wholesome. I highly recommend studying abroad to anyone 
                              who wants to broaden their horizons and gain a unique perspective on the world.</p>
                        </div>
                        <div className="feedback-col">
                            <div className="user">
                            <img src={success} alt='success'/>
                                <div className="user-info">
                                    <h4>SUZENA <i className="fa fa-twitter" aria-hidden="true"></i></h4>
                                    <small>@suzena</small>
                                </div>
                            </div>
                            <p>
                            Studying abroad was an amazing adventure that I would recommend to anyone looking to expand 
                            their perspectives and experiences. I was able to immerse myself in a new culture and step 
                            out of my comfort zone, leading to personal growth. The educational system was excellent and 
                            the professors were knowledgeable and enthusiastic about their subjects. The study abroad
                             program provided fantastic support, from the application process to 
                            finding housing and making new friends. Overall, it was a fantastic experience that I will treasure forever.
                            </p>
                        </div>
                        <div className="feedback-col">
                            <div className="user">
                            <img src={success} alt='success'/>
                                <div className="user-info">
                                    <h4>ROCKY <i className="fa fa-twitter" aria-hidden="true"></i></h4>
                                    <small>@rocky</small>
                                </div>
                            </div>
                            <p>
                            I recently had the opportunity to study abroad and it was an experience unlike any other. 
                            Being exposed to a new culture and way of life challenged me and helped me grow both personally 
                            and academically. The quality of education was exceptional and the professors were dedicated and 
                            passionate. The study abroad program offered outstanding support, from the application process
                            to securing housing and adapting to a new environment. I would highly recommend
                            studying abroad to anyone seeking to broaden their horizons and have a truly unforgettable experience.
                            </p>
                        </div>
                    </div>
            </section>
            <Footer/>
    
</div>
    </>
  )
}

export default Home