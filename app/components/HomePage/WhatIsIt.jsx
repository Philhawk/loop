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
      <div className="whatisit">
        <div className="row">
          <div className="col s1 m1 l1 backGround">
          </div>
          <div className="what-is-it-text col s11 m11 l11">
            What Is It?
          </div>
        </div>
        <div className="row ">
          <div className="col s0 m0 l2 backGround">
          </div>
          <div className="col s12 m12 l8 backGround">
            <div className="row">
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                  <i className="large material-icons">insert_chart</i>
                  </div>
                  <div className="col s12 m12 l8">
                    When asked, teachers always comment on the lack of real-time feedback from Students. That’s where Loop comes in.
                  </div>
                </div>
              </div>
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                  <i className="large material-icons">insert_chart</i>
                  </div>
                  <div className="col s12 m12 l8">
                    When asked, teachers always comment on the lack of real-time feedback from Students. That’s where Loop comes in.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                    <i className="large material-icons">insert_chart</i>
                  </div>
                    <div className="col s12 m12 l8">
                    When asked, teachers always comment on the lack of real-time feedback from Students. That’s where Loop comes in.
                  </div>
                </div>
              </div>
              <div className="col s6 m6 l6">
                <div className='row'>
                  <div className="col s12 m12 l4">
                  <i className="large material-icons">insert_chart</i>
                  </div>
                  <div className="col s12 m12 l8">
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

export default WhatIsIt;
