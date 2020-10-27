import React from "react";
import "./NewsLetters.css";
import Carousel from "react-elastic-carousel";
function NewsLetters() {
  return (
    <div className="Casestudies" id="sec-4">
      <h1>Case Studies</h1>
      <div className="caseCards">
        <Carousel>
        <div className="caseCard">
          <h5> <i> Problem - </i></h5>
          <p>User churning after login or first session. Find possible reasosn. and suggest soulution</p>
          <h5> <i>Solution -</i> </h5>
          <p>Studied the user journey and trewnds to recommend new features and modifications existing features to minimize the user dropouts</p>
          <a href="https://drive.google.com/file/d/1jrDiJ3Nyb8w76uZp69FARZhB_gAPwyV6/view" target="_blank">  <button className="btn-sm  btn-success "> Detailed Solution</button> </a> 
        </div>
        <div className="caseCard">
        <h5> <i> Problem - </i></h5>
        <p>Design a product to Upskill college students and graduates to become job ready. And Design a WebApp for recruiters to hire candidates with verify skills ( <strong>Ranked Top 10 in India by TestBook.com</strong> )</p>
        <h5> <i>Solution -</i> </h5>
        <p>Designed a product where students and professionals can learn skills according to market demand and get verify to apply for job</p>
        <a href="https://drive.google.com/file/d/1jrDiJ3Nyb8w76uZp69FARZhB_gAPwyV6/view" target="_blank"><button className="btn-sm btn-success" >Detailed Solution </button></a>
        </div>

        <div className="caseCard">
        <h5> <i> Problem - </i></h5>
        <p>What can be Flipkart's strategy to Expand in tier 2 and tier 3 cities </p>
        <h5> <i>Solution -</i> </h5>
        <p>After detailed market research, user assesment and Competitor Landscape, defined the GTM for Flipkart</p>
        <a href="https://drive.google.com/file/d/1O7bPRd7hu_JI01U_AjL7NiSSzBaqSfCE/view" target="_blank"><button className="btn-sm btn-success">Detailed Solution</button></a>
        </div>
        </Carousel>
      </div>
    </div>
  );
}

export default NewsLetters;
