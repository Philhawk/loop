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
          <div className="col s12 m3 ">
            <img className="circle responsive-img" src="img/aboutUs/Andrew.jpg"/>
            <h5>Andrew</h5>
            <p>I began working as a software developer in part because of what I saw during my teaching experience. I saw many technological tools that teachers and students were forced to use that were inadequate at best and actively inhibiting to student progress at worst.</p>
            <p>I see technology as being one of the great equalizers in our society, and in the school I was working in, it often was not.</p>
          </div>
          <div className="col s12 m3 ">
            <img className="circle responsive-img" src="img/aboutUs/George.jpg"/>
            <h5>George</h5>
            <p>I enjoy solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp. Programming is essentially a puzzle that can be put together in many different ways, but the key is finding the most efficient way to do it.
            </p>
            <p>I try to do things in a step by step fashion, and focus on effective planning to get me through the day, so I'm not wasting time doing the same thing twice.
            </p>
          </div>
          <div className="col s12 m3 ">
            <img className="circle responsive-img" src="img/aboutUs/Phil.jpg"/>
            <h5>Phil</h5>
            <p>I've worn many hats over the years. Teacher, financial analyst, journalist and now as a Web Developer. I place a tremendous amount of importance on spending every day learning something new.</p>
            <p>I have an insatiable appetite for building listening and learning from the talented people that surround me. I'd describe myself as hard-working, ambitious and eager to learn.</p>
          </div>
          <div className="col s12 m3">
            <img className="circle responsive-img" src="img/aboutUs/andrew.jpg"/>
            <h5>Andrew</h5>
            <p>I began working as a software developer in part because of what I saw during my teaching experience. I saw many technological tools that teachers and students were forced to use that were inadequate at best and actively inhibiting to student progress at worst.</p>
            <p>I see technology as being one of the great equalizers in our society, and in the school I was working in, it often was not.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUseIt;


/* Waiting on A^2 hi-res head shots*/
// Need Andy's about me statement
