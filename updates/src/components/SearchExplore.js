import React, { useState } from "react";
import '../CSS/Explore.css'

// ICONS
import {BiSearchAlt} from "react-icons/bi"
import {HiOutlineClipboardDocumentList} from "react-icons/hi2"
import {AiOutlineDollar,AiOutlineHome} from "react-icons/ai"
import {IoIosSchool} from "react-icons/io"

//files
import Footer from './Footer'
import logo3 from '../images/logo.png'

const SearchExplore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [
      { 
        cardLink:"https://www.harvard.edu/",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
        name: "Harvard Unversity",
        WebLink:"https://mapprod.cadm.harvard.edu/portal/apps/indoors/index.html?appid=2c3969f8d1b14147920610a68f6db713#?n=1676808442348",
        address: "Massachusetts, United States",
        courseLink:"https://pll.harvard.edu/",
        course: "PhD in Computer Science",
        fees: "$54837",
        scholar: "Not Available"
      },
      { 
        cardLink:"https://www.cam.ac.uk/ ",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/1200px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png",
        name: "University of Cambridge",
        WebLink:"#",//Error
        address: "University Cambridge, England ",
        courseLink:"#",//error
        course: "M.Sc. Information Technology ",
        fees: "$44837",
        scholar: "Available"
      },
      { 
        cardLink:"https://www.stanford.edu/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_of_Stanford_University.png",
        name: "Standford University ",
        WebLink:"#",//Error
        address: "Standford, California",
        courseLink:"https://gradadmissions.stanford.edu/",
        course: "MBA",
        fees: "$60000",
        scholar: "Not Available"
      },
      { 
        cardLink:"https://www.ox.ac.uk/ ",
        logo: "https://w7.pngwing.com/pngs/495/475/png-transparent-coat-of-arms-of-the-university-of-oxford-stanford-university-college-college-student-logo-university-higher-education.png",
        name: "University of Oxford",
        WebLink:"#",//error
        address: "University Oxford, England",
        courseLink:" https://www.ox.ac.uk/admissions/undergraduate/courses",
        course: " M.Sc. Information Technology ",
        fees: "$70500",
        scholar: "Available"
      },
      { 
        cardLink:" https://www.utoronto.ca/ ",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",
        name: "University of Toronto",
        WebLink:"#",//error
        address: "University Toronto, Canada",
        courseLink:" https://www.utoronto.ca/academics/programs-directory",
        course: " M.Sc. Information Technology  ",
        fees: "$45500",
        scholar: "Not Available"
      },
      { 
        logo: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        name: "Harvard Unversity",
        address: "Massachusetts, United States",
        course: "PhD in Computer Science",
        fees: "$54837",
        scholar: "Available"
      }
    ];
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div className='heading-explore'>
      
        <h1><img src={logo3} alt='logo' className="logo-3"/>Explore: Best Colleges & Universities to Study Abroad</h1>
        <p>All you need to know about university fees, courses, deadlines, scholarships and more.</p>
          <form onSubmit={handleSubmit} className="forms">
            <input
              type="text"
              placeholder="Search here...."
              value={searchTerm}
              onChange={handleChange}
              className="search"
            />
            <button type="submit" className="search-btn" ><BiSearchAlt size={23}/></button>
          </form>
      </div>
     {searchResults.length >= 0 && (
        <section id="explore">
          {searchResults.map((item, index) => (
            <a href={item.cardLink} className="card">
            <div className='explore-bg'>
                      {/* <div className="explore-row-1"> */}
                           <div className="explore-col-1">
                              <img src={item.logo} alt='logo'/>

                                    <div className="explore-name">
                                          <h5>{item.name}</h5>
                                          <a href={item.WebLink}>{item.address}</a>
                                    </div>
                                    <div className="line"></div>
                                    <div className="course-details">
                                        <small><HiOutlineClipboardDocumentList size={25}/>Course Name</small><br/>
                                        <a href={item.courseLink}>{item.course}</a> 
                                    </div>

                                    <div className="explore-info">
                                        <p><small><AiOutlineDollar size={25}/>Average Tution Fees</small><br/>
                                          {item.fees}</p>
                                        <p><small><IoIosSchool size={25}/>Scholarship</small><br/>
                                          {item.scholar}</p>
                                    </div>  
                            </div>
                      {/* </div> */}
              </div>
              </a>
          ))}
         
      </section>
      )}
      <Footer/>
      <a href="./">
      <div className="menu">
            <AiOutlineHome />
      </div>
      </a>
    </div>
  );
};

export default SearchExplore;