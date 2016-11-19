import React, { Component } from 'react';
import IncomingQuestion from '../IncomingQuestion/IncomingQuestion'

export default class StudentLoop extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="student-view">
        <div className="row" id="incoming-question">
          <div className="col s12">
            <div className="card medium z-depth-2">
              <IncomingQuestion />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="card medium z-depth-2">
                <div className="col s8 red" id="ask-question">
                  YO
                </div>
                <div className="col s4 yellow" id="current-feeling">
                  YO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
