import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize';

export default class TeacherCreateLoop extends Component {
  constructor() {
    super();
  }

  render() {
    return (
     <div className="row">

        <div className="col s12 m12 l6" id="questionCreation">
          <div className="row"></div>
          <Button waves='light' id="startPresBtn">Start Presentation</Button>
          <div className="row"></div>
          <div className="card large blue-grey darken-1">
            <div className="card-content white-text">
              {/*form data goes here*/}
            </div>
          </div>
        </div>

        <div className="col s12 m12 l4" id="questionOption">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Fill in the blank</span>
              <p>Your teachers name is ___________.</p>
            </div>
            <div className="card-action">
              <a href="#">Create</a>
            </div>
          </div>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Multiple Choice</span>
              <h6>Who is the 44th President of the United States?</h6>
              <p>A. Barack Obama</p>
              <p>B. Abraham Lincoln</p>
              <p>C. George Bush</p>
            </div>
            <div className="card-action">
              <a href="#">Create</a>
            </div>
          </div>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Open Ended</span>
              <p>160 characters or less please.</p>
            </div>
            <div className="card-action">
              <a href="#">Create</a>
            </div>
          </div>
        </div>

        <div className="col s12 m2 l2" id="Sidebar">
          <div className="card #37474f blue-grey darken-3">
            <div className="card-content white-text">
              <span className="card-title">User Name</span>
            </div>
          </div>
          <div className="card #37474f blue-grey darken-3">
            <div className="card-content white-text">
              <Button floating large className='green' waves='light' icon='add' id="addBtn" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
