import React, { Component } from 'react';

export default class TeacherPresentMainCards extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="row TeacherPresentMainCards">
          <div className="col s12 m8 l9 teacherPresentationCurrentCard">
             CurrentCard
          </div>
          <div className="col s12 m4 l3 teacherPresentationNextCard">
              NextCard
          </div>
        </div>
    );
  }
}
