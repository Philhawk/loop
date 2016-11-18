//React
import {Link} from 'react-router';
import React, { Component } from 'react';

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
      <div className="row">
        <div className="container">
          <div className="heading-text col s12 m12 l12">
            Loop
          </div>
          <div className="sub-heading-text col s12 m12 l12">
            A realtime teaching tool that allows students and teachers to responsievly interact in the classroom
          </div>
          <a href="#!" className="waves-effect waves-teal btn">Potato</a>
          <a href="#!" className="waves-effect waves-teal btn">Send</a>

        </div>
      </div>
    );
  }
}

export default CentreText;
