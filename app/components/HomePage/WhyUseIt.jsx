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
      <div className="whatisit">
        <div className="row">
          <div className="col s1 m1 l1 backGround">
          </div>
          <div className="what-is-it-text col s11 m11 l11">
            Why Use It?
          </div>
        </div>
        <div className="row no-pad ">
          <div className="col s0 m0 l2 backGround">
          </div>
          <div className="col s12 m12 l8 backGround">
            <div className="row">
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="material-icons">account_circle</i>
                  </div>
                  <div className="whatsummary col s12 m12 l8">
                    When asked, teachers always comment on the lack of real-time feedback from Students. That’s where Loop comes in.
                  </div>
                </div>
              </div>
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="material-icons">assignment</i>
                  </div>
                  <div className="whatsummary col s12 m12 l8">
                    When asked, teachers always comment on the lack of real-time feedback from Students. That’s where Loop comes in.
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
                    When asked, teachers always comment on the lack of real-time feedback from Students. That’s where Loop comes in.
                  </div>
                </div>
              </div>
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="material-icons">pie_chart</i>
                  </div>
                  <div className="whatsummary col s12 m12 l8">
                    When asked, teachers always comment on the lack of real-time feedback from Students. That’s where Loop comes in.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s0 m0 l2">
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUseIt;
