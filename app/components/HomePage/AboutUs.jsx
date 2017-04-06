//React
import React, { Component } from 'react';

/* ---  Component --- */
class WhyUseIt extends Component {
  constructor() {
    super();
  }

  render() {

// WhyUseIt component
    return (
      <div className="aboutus">
        <a name="about-us"></a>
        <div className="row">
          <div className="col s12 m12 l12 about-us-heading-text">
            About Us
          </div>
        </div>
        <div className="row whatsummary">
          <div className="col s12 m3 l3 head-shot">
            <img className="circle responsive-img" src="img/aboutUs/AndrewCropped.JPG"/>
            <h5 className="about-us-names">Andrew</h5>
            <p>I began working as a software developer in part because of what I saw during my teaching experience. I saw many technological tools that teachers and students were forced to use that were inadequate at best and actively inhibiting to student progress at worst.</p>
          </div>
          <div className="col s12 m3 l3 head-shot">
            <img className="circle responsive-img" src="img/aboutUs/GeorgeCropped.JPG"/>
            <h5 className="about-us-names">George</h5>
            <p>I enjoy solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp. Programming is essentially a puzzle that can be put together in many different ways, but the key is finding the most efficient way to do it.
            </p>
          </div>
          <div className="col s12 m3 l3 head-shot">
            <img className="circle responsive-img" src="img/aboutUs/PhilCropped.JPG"/>
            <h5 className="about-us-names">Phil</h5>
            <p>I've worn many hats over the years. Teacher, financial analyst, journalist and now as a Web Developer. I place a tremendous amount of importance on spending every day learning something new.</p>

          </div>
          <div className="col s12 m3 l3 head-shot">
            <img className="circle responsive-img" src="img/aboutUs/AndyCropped.JPG"/>
            <h5 className="about-us-names">Andy</h5>
            <p>Versatile, business savvy Full Stack developer proficient in multiple stacks and environments with a passion for solving problems. If you can dream it, we can build it.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUseIt;
