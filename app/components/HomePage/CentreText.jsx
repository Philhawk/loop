//React
import {Link} from 'react-router';
import React, { Component } from 'react';
import CarouselVideo from '../CarouselVideo'

/* ---  Component --- */
class CentreText extends Component {
  constructor() {
    super();
  }

  render() {
    // Material UI styles
    const styles = {

    };

// CentreText component
    return (
      <div className="container">
        <div className="row">
          <div className="heading-text col s12 m12 l12">
            Loop
          </div>
        </div>

        <div className="row">
          <div className="sub-heading-text col s12 m12 l12">
            A realtime teaching tool that allows students and teachers to responsievly interact in the classroom
          </div>
        </div>

        <div className="row padding-rule">
          <div className="header-buttons col s6 m6 l6">
            <a className="button-left" href="#">For Teachers</a>
          </div>

          <div className="header-buttons col s6 m6 l6">
            <a className="button-right" href="#">For Students</a>
          </div>
        </div>

        <div className="row padding-rule">

          <div className="col s4 m4 l4">
            <div className="fancy-stats">
              54%
            </div>
            <div className="stats-explainer">
              Increase in student productivity
            </div>
          </div>

          <div className="col s4 m4 l4">
            <div className="fancy-stats">
              3.3%
            </div>
            <div className="stats-explainer">
              More questions answered in class
            </div>
          </div>

          <div className="col s4 m4 l4">
            <div className="fancy-stats">
              100,000
            </div>
            <div className="stats-explainer">
              Questions answered - and counting
            </div>
          </div>
        </div>

        <div className="row">
          <CarouselVideo />
        </div>
      </div>
    );
  }
}

export default CentreText;
