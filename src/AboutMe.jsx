import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import profilepic from "./images/banner.png";
import "./AboutMe.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import linkdin from './images/linkedin2.png';
import twitter from './images/twitter.png';
function AboutMe() {
const navClick = ()=>{
  let nav = document.getElementById("burger")
 nav.classList.toggle("open");
}

  return (
    <>
    
    <div className="About" id="sec-1">
    
      <div className="profileNav">
        
      
      <a onClick={navClick} style={{cursor:"pointer", zIndex:"2", position:"static"}}><MenuRoundedIcon /></a>
      
      
      
        <a 
          href="mailto:anmolrattan912@gmail.com"
          className="btn btn-basic text  "
          style={{marginRight:"20px", marginLeft:"auto",  border: "2px solid lightgrey", borderRadius: "30px",color:"#fff" ,justifySelf:"flex-end"}}
        >
          Hire me
        </a>
        <a href="https://drive.google.com/file/d/11Acw_qsy494aSnpWVgdavsp0vd8o99PB/view" target="_blank" style={{color:"white"}} title="Download Resume">
        <GetAppOutlinedIcon  />
        </a>
      </div>
      <div className="navBurger" id="burger">
        <ul>
          <h5>>>&nbsp;&nbsp;&nbsp;&nbsp; <i>For Recruiters </i> </h5>
          <div style={{height:"0.4px", width:"60%",margin:"0 2%",background:"whitesmoke"}}> </div>
          <a href="https://docs.google.com/document/d/1EmSUW_1P2D7vdfnlICW7DkefhlFGxi_20ohOQ5JN-2w" target="_blank">
          <li>Achievements/Awards</li>
          </a>
          <a href="https://drive.google.com/file/d/11Acw_qsy494aSnpWVgdavsp0vd8o99PB/view" target="_blank">
          <li>Download Resume</li>
          </a>
          <a href="">
          <li>References</li>
          </a>
          <h5>>>&nbsp;&nbsp;&nbsp;&nbsp; <i>For Students</i> </h5>
          <div style={{height:"0.4px", width:"60%",margin:"0 2%",background:"whitesmoke"}}> </div>
          <a href="https://anmolrattan.substack.com/" target="_blank">
          <li>Product Blog</li>
          </a>
          <a href="https://calendly.com/theanmolrattan/mock-interview-product-management?month=2020-10" target="_blank">
          <li>book a 1-1 call for Career Guidance and Managing College Stress</li>
          </a>
          <a href="mailto:anmolrattan912@gmail.com">
          <li>Write your queries</li>
          </a>
        </ul>

      </div>
      <div className="imageBg">
        <img src={profilepic} alt=""/>
      </div>
      <div className="profileCard">
      <strong style={{fontSize:"1.5rem"}}>Anmol Rattan Sharma</strong>
        <div className="profileDetails">
        
          <p className="aboutText">
            
            <strong> IIT ROPAR || Graduating in 2021</strong>
            <br />
            Looking for Product/Analyst roles
           
          </p>
          <div className="social">
         <a href="https://www.linkedin.com/in/anmolrattan912/" target="_blank"> <img src={linkdin} alt=""/></a>
         <a href="https://twitter.com/theanmolrattan?s=09" target="_blank"> <img src={twitter} alt=""/></a>
          </div>
        </div>
        <div style={{height:"0.4px", width:"80%",margin:"0 auto",background:"gold"}}> </div>
        <div className="detailsText">
        I'm passionated about building the Products that can impact lives of the people on the daily basis. Business Strategy, Data Science & Cognitive Science (Psychology, HCI, UX) excites me!

Business+Tech+Design is what drives me the most at work, I'm a final year engineering undergraduate student majoring in Mechanical Engineering.

I have 1+ years of experience working in fast startup environment in Strategy and Product Management roles. Built 2 tech products from scratch across different US and Indian markets that get featured in BBC, Forbes and recognised by the Government of India. 

<br/>

 <i style={{marginRight:"auto"}}> <strong >My core competencies lies in:</strong> </i>
<br/>Product Development, Business Strategy, Data Analysis, Go-to Market Planning, UX Research and Designing

I'm a cause driven person. Identified the Problems and lead the team on solving issues of clothing for slums people, climate change due to Stubble Burning in Punjab and issues of farmers crop destruction by the wild animals.

I've been a student researcher at IIT Ropar & NUS, worked on designing medical devices: Biodegradable Human Stent, Painless Needle
<br/>
<i> <strong> Three things that defines me: Perseverance, Emapthy and Creativity!</strong> </i> 



        </div>
        
      </div>
      <div className="navigation">
          <a href="#sec-2">Experiences</a>
          <a href="#sec-3">Interns</a>
          <a href="#sec-4">Case-Studies</a>
        </div>
    </div>
    </>
  );
}

export default AboutMe;
