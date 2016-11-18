import React, { Component } from 'react';
import Unauthorized from '../Unauthorized/Unauthorized';
import TeacherCreateLoop from '../TeacherCreateLoop/TeacherCreateLoop';
import TeacherPresentLoop from '../TeacherPresentLoop/TeacherPresentLoop';
import StudentLoop from '../StudentLoop/StudentLoop';

export default class Loop extends Component {
  constructor() {
    super();
  }

  studentOrTeacher() {
    if(!this.props.user) return <Unauthorized />
    if(this.props.user.role === "Teacher" && !this.props.session.active) {
      return <TeacherCreateLoop />
    } else if(this.props.teacher.role === "Teacher" && this.props.session.active) {
      return <TeacherPresentLoop />
    } else if(this.props.user.role === "Student") {
      return <StudentLoop />
    }
  }

  render() {
    return (
      <div>
        {this.studentOrTeacher()}
      </div>
    );
  }
}
