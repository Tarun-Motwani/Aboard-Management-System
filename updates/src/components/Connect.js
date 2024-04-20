import  React from 'react';
import '../CSS/Connect.css'
// import Contact from "./Contact.js"
class connectus extends React.Component{
  render() {
    return (
      <div className='whole-connect-page'>
        <div className="about-section-connect">
          <h1>Connect</h1>
          <p><b>Connecting with alumni who have studied abroad can provide valuable insights, advice, and networking opportunities to support your own study abroad goals.</b></p>  
          <p><b>Here our some of our well settled Alumini's</b></p>
        </div>
        <h2 style={{textAlign: 'center'}}>Our Alumini's</h2>
        <div className="row-connect">
          <div className="column-connect">
            <div className="card-connect">
              <img src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=" alt="Jane" style={{width: '100%'}} />
              <div className="container-connect">
                <h2>Alex Johnson</h2>
                <p className="title-connect">CEO &amp; Founder</p>
                <p>Alex Johnson is a dynamic and innovative leader with a strong background in the technology industry. As the CEO and founder of a successful technology startup, he is known for his vision, strategic thinking, and ability to build and lead high-performing teams.</p>
                <p>alex.johnson@gmail.com</p>
                <a href='https://www.linkedin.com/in/manasi-nandrajog-954a9b244/'><button className="button-connect">Contact</button></a>
              </div>
            </div>
          </div>
          <div className="column-connect">
            <div className="card-connect">
              <img src="https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" alt="Mike" style={{width: '100%'}} />
              <div className="container-connect">
                <h2>Emily Kim</h2>
                <p className="title">Art Director</p>
                <p>Emily Kim is a highly accomplished and creative art director with a keen eye for design and a passion for innovation. With years of experience in the design industry, she has developed a reputation for bringing fresh and exciting ideas to the table, and for executing them with exceptional attention to detail.</p>
                <p>emily.kim.09@gmail.com</p>
                <a href='https://www.linkedin.com/in/harish-nagure-20762a236'><button className="button-connect">Contact</button></a>
              </div>
            </div>
          </div>
          <div className="column-connect">
            <div className="card-connect">
              <img src="https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg" alt="John" style={{width: '100%'}} />
              <div className="container-connect">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>John Doe is a skilled and experienced designer with a passion for creating beautiful, functional designs. He is known for his ability to work across multiple mediums, including print, digital, and environmental design, and for his exceptional attention to detail.</p>
                <p>john@gmail.com</p>
                <a href='https://www.linkedin.com/in/manasi-nandrajog-954a9b244/'><button className="button-connect">Contact</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connectus;