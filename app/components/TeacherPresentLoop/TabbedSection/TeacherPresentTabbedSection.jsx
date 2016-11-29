import React, { Component } from 'react';
import TeacherPresentTabbedLeft from './TeacherPresentTabbedLeft';
import TeacherPresentTabbedRight from './TeacherPresentTabbedRight';

export default class TeacherPresentTabbedSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="row card">
            <div className="col s12 m8 l8 teacherPresentationTabbedSection card-title">
              Questions
              <TeacherPresentTabbedLeft />
            </div>
            <div className="col s12 m4 l4 teacherPresentationTabbedSection card-title">
              Data
             <TeacherPresentTabbedRight />
            </div>
        </div>
    );
  }
}
