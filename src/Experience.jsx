import React from "react";
import "./Experience.css";
import Carousel from "react-elastic-carousel";

function Experience() {

  return (
    <div className="experience" >
      <h1 id="sec-2"> Works & Experience </h1>

      <Carousel className="Carousel-cards" >
        <div className="workCard" >
          <h3><strong>Product Manager || ScratchNest</strong></h3>
          <h5>Contract | Rupnagar Punjab, India || July 2020- Sept’20</h5>
          <ul>
            
            <li>Headed the vertical of BLE (Bluetooth Low Energy) products.</li>
            <li>B2B-Product Roadmap and discovering new opportunities</li>
            <li>Product Marketing and Stakeholder mapping</li>
           
          </ul>
        </div>
        <div className="workCard">
          <h3>
            <strong>Business Product Manager || FullCircle</strong>

          </h3>
          <h5> USA, Atlanta (Remotely) | Mental Health App || Dec’19 – July’20</h5>
          <ul>
            <li>Defined the product and company level goals with CEO</li>
            <li>Finalized MVP features by market research and user interviews.</li>
            <li> Cross functioning with the Design and Tech team.</li>
            <li> Launched the first MVP for 2k+ students in US</li>
            
          </ul>
        </div>
        <div className="workCard">
          <h3><strong>Biomimetic-Biomedical Engineer || FullCircle</strong></h3>
          <h5> USA, Atlanta (Remotely) | VR Obesity Device || July’19 – Dec’19</h5>
          <ul>
            <li>Set directions for Product development combining insights </li>
            <li>From human psychology in gastronomic experiences.</li>
            <li>Prioritized the product features by analyzing sensory, </li>
            <li>Olfactory, and visual cues through customer interviews.</li>
            <li> Successfully developed the product sketches and prototyped</li>
          </ul>
        </div>
        
       
        
        
      </Carousel>
      <h1 id="sec-3" >Internships</h1>
      <Carousel className="Carousel-cards">
      <div className="intern workCard " >
          <h3><strong>Swiggy || Business & Operations Intern</strong></h3>
          <h5> Rupnagar, Punjab India || Aug 2019 - December 2019</h5>
          <ul>
            <li>Successfully launched the Swiggy operations in the IIT Ropar </li>
            <li>campus by on-boarding 10+ major restaurants of the city.</li>
            <li>Increased the number of daily & monthly orders by 110%</li>
            <li> Marketed the brand value by partnering with college fests,events.</li>
            <li> Handled the queries and grievances of customers & delivery boys</li>
          </ul>
        </div>
        <div className="intern workCard">
          <h3><strong>Toppr || Summer Strategy Intern</strong></h3>
          <h5> Remotely | Sales Team || Mar 2020 - June 2020</h5>
          <ul>
            <li>Worked with VP, on a new international expansion project</li>
            <li>Studied market landscape and drive analytical results</li>
            <li>Build the Excel Dashboards for competitors, product analysis.</li>
            <li>Conducted User, Stakeholders interview to find opportunities</li>
            <li>Successfully defined complete GTM for 7 African countries.</li>
          </ul>
        </div>
        <div className="intern workCard">
          <h3><strong>National University of Singapore (NUS) </strong></h3>
          <h5>Research Intern || Jan 2019 – August 2019</h5>
          <ul>
            <li>Conducted research on Nature Inspired medical robots</li>
            <li>Successfully analyzed the design, mechanics & actuations</li>
            <li>Presented the Research Review Paper on Medical Applications</li>
          </ul>
        </div>
        <div className="intern workCard">
          <h3><strong>Indian School of Business || Marketing Intern</strong></h3>
          <h5>Guide- Dr. Anusha Sirigiri || January 2020 –April 2020</h5>
          <ul>
            <li>Defined the 4Ps of marketing strategies, brand mission and value</li>
            <li>Improved the outreach by building 2+ strategic partnerships</li>
            <li> Enhanced the LinkedIn traffic by 150% and increase the registration </li>
          </ul>
        </div>
      </Carousel>
    </div>
  );
}

export default Experience;
