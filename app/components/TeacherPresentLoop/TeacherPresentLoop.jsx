import React, { Component } from 'react';
import TeacherPresentControlBar from './TeacherPresentControlBar'
import TeacherPresentMainCards from './TeacherPresentMainCards'
import TeacherPresentCardPanel from './CardPanel/TeacherPresentCardPanel'

export default class TeacherPresentLoop extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="row teacherPresentationViewMain">
          <div className="col s12 m8 l9">
             <TeacherPresentControlBar />
             <TeacherPresentMainCards />
          </div>
          <div className="col s12 m4 l3 teacherPresentationViewPanel">
             <TeacherPresentCardPanel />
          </div>
        </div>
    );
  }
}
