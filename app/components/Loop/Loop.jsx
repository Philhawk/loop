import { connect } from 'react-redux';
import React, { Component } from 'react';
import TeacherPresentLoop from '../TeacherPresentLoop/TeacherPresentLoop';
import { StudentLoop } from '../StudentLoop/StudentLoop';

class LoopComponent extends Component {
  constructor() {
    super();
  }

  studentOrTeacher() {
    if (this.props.auth.role === 'Teacher') {
      return <TeacherPresentLoop />;
    } else {
      return <StudentLoop />;
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

const mapStateToProps = ({ auth }) => ({ auth });
const Loop = connect(mapStateToProps)(LoopComponent);

export default Loop;
