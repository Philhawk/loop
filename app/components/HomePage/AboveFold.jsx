//React
import React, { Component } from 'react';
import CarouselVideo from '../CarouselVideo'
import { Link } from 'react-router';

/* ---  Component --- */
class AboveFold extends Component {
  constructor() {
    super();
  }

  render() {
    // Material UI styles
    const styles = {

    };

// AboveFold component
    return (
      <div className="container" style={{paddingBottom: '2em'}}>
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
            <Link className="button-left" to="/welcome">For Teachers</Link>
          </div>

          <div className="header-buttons col s6 m6 l6">
            <Link className="button-right" to="/welcome">For Students</Link>
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

        <div className="row padding-rule potato">
          <CarouselVideo />
          <div className="sub-heading-text col s12 m12 l12">
            <div className="student-stories-header padding-rule">
              Student stories
            </div>
            <div className="student-stories-explainer padding-rule-less">
              A realtime teaching tool that allows students and teachers to responsievly interact in the classroom
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboveFold;
