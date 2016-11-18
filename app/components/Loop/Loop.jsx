import React, { Component } from 'react';

export default class Loop extends Component {
  constructor() {
    super();
  }

  studentOrTeacher() {
    if(this.props.user.role === "Teacher" && !this.props.session.active) {
      return <TeacherCreateLoop />
    } else if(this.props.teacher.role === "Teacher" && this.props.session.active) {
      return <TeacherPresentLoop />
    } else if(this.props.user.role === "Student") {
      return <StudentLoop />
    } else {
      return <Unauthorized />
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
