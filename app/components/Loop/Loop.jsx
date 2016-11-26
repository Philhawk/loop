import React, { Component } from 'react';
import Unauthorized from '../Unauthorized/Unauthorized';
import TeacherCreateLoop from '../TeacherCreateLoop/TeacherCreateLoop';
import TeacherPresentLoop from '../TeacherPresentLoop/TeacherPresentLoop';
import StudentLoop from '../StudentLoop/StudentLoop';
import { connect } from 'react-redux';

class LoopComponent extends Component {
  constructor() {
    super();
  }

  studentOrTeacher() {
    if(this.props.auth.role === "Teacher") {
      return <TeacherPresentLoop />
    } else {
      return <StudentLoop />
    }
  }

  render() {
    return (

      <div>
        <TeacherPresentLoop />
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth})
const Loop = connect(mapStateToProps)(LoopComponent)

export default Loop;
