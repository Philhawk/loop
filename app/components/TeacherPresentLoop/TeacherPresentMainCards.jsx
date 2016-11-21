import React, { Component } from 'react';

export default class TeacherPresentMainCards extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="row card TeacherPresentMainCards">
          <div className="col s12 m8 l8 teacherPresentationCurrentCard">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">Current Card</span>
                <div className="card blue-grey darken-1">
                   <div className="card-content white-text">
                       <span className="card-title">Current Card</span>
                       <p>Your teachers name is ___________.</p>
                       <p>Your teachers name is ___________.</p>
                       <p>Your teachers name is ___________.</p>
                   </div>
               </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4 l4 teacherPresentationNextCard">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">Next Card</span>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Next Card</span>
                        <p>Your teachers name is ___________.</p>
                        <p>Your teachers name is ___________.</p>
                        <p>Your teachers name is ___________.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
