import React, { Component } from 'react';
import IncomingQuestion from '../IncomingQuestion/IncomingQuestion';
import StudentAsk from '../StudentAsk/StudentAsk';
import StudentMood from '../StudentMood/StudentMood';

export default class StudentLoop extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="student-view">
        <div className="row">
          <div className="col s12">
            <div className="card z-depth-2">
              <IncomingQuestion />
            </div>
          </div>
        </div>
        <div className="row card z-depth-2">
          <div className="card z-depth-2">
            <div className="col s8">
              <StudentAsk />
            </div>
            <div className="col s4" id="current-feeling">
              <StudentMood />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
