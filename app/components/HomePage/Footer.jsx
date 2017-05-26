import React, { Component } from 'react';

/* ---  Component --- */
class Footer extends Component {

  render() {
// Footer component
    return (
      <div className="footer">
        <div className="row">
          <div className="col s6 m6 l6">
            <div className="bottom-brand-logo">
              {<img src="/logo.png" alt="Logo of Loop"></img>}   Loop
            </div>
          </div>
          <div className="col s6 m6 l6 termsandconditions">
            Terms & Privacy
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;
