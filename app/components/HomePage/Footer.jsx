import React, { Component } from 'react';

/* ---  Component --- */
class Footer extends Component {

  render() {
// Footer component
    return (
      <div className="footer">
        <div className="row">
          <div className="col s4 m4 l4">
            <div className="bottom-brand-logo">
              {<img src="/logo.png" alt="Logo of Loop"></img>}   Loop
            </div>
          </div>
          <div className="col s8 m8 l8 termsandconditions">
            Terms & Privacy
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;
