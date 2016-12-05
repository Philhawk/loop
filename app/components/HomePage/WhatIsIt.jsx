//React
import React, { Component } from 'react';

/* ---  Component --- */
class WhatIsIt extends Component {
  constructor() {
    super();
  }

  render() {

// WhatIsIt component
    return (
      <div>
        <a name="what-is-it"></a>
        <div className="row no-pad whatisit">
          <div className="row">
            <div className="col s1 m1 l1 "></div>
            <div className="what-is-it-text col s11 m11 l11">
              What Is It?
            </div>
          </div>
          <div className="col s0 m0 l2 "></div>

          <div className="col s12 m12 l8" id="homepage-icons">
            <div className="row">
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="material-icons">account_circle</i>
                  </div>
                  <div className="whatsummary col s12 m12 l8">
                    Loop is a real-time communication tool that uses advanced technologies to give teachers immediate feedback about their students understanding and mood levels
                  </div>
                </div>
              </div>
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="material-icons">assignment</i>
                  </div>
                  <div className="whatsummary col s12 m12 l8">
                      Loop allows teachers to ask students questions, while checking for understanding classroom mood levels.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="material-icons">speaker_notes</i>
                  </div>
                    <div className="whatsummary col s12 m12 l8">
                    Loop gives students the ability to anonymously ask the teacher questions.
                  </div>
                </div>
              </div>
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="material-icons">pie_chart</i>
                  </div>
                  <div className="whatsummary col s12 m12 l8">
                    When asked, teachers always comment on the lack of real-time feedback. Meet Loop.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col s0 m0 l2 "></div>
        </div>
      </div>
    );
  }
}

export default WhatIsIt;
