import React, { Component } from 'react';

export default class StudentLoop extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="incoming-question">
        <div className="row">
          <div className="col s12">
            <h1 className="center-align">THIS IS A QUESTION</h1>
          </div>

        </div>
        <div className="row">
          <div className="col s3 red">
            a
          </div>
          <div className="col s3 blue">
            b
          </div>
          <div className="col s3 green">
            c
          </div>
          <div className="col s3 black">
            d
          </div>
        </div>
      </div>
    );
  }


}
