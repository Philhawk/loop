import React, { Component } from 'react';
import IncomingQuestion from '../IncomingQuestion/IncomingQuestion';
import StudentAsk from '../StudentAsk/StudentAsk';
import StudentMood from '../StudentMood/StudentMood';
import { callCurrentQuestion } from '../../reducers/currentQuestion';
import { connect } from 'react-redux';

class StudentLoopComponent extends Component {
  constructor(props) {
    super(props);
      this.props.socket.on('newTeacherQuestion', ({question}) => {
      this.props.callCurrentQuestion({ content: question.content, choices: question.choices, questionType: question.questionType
      })
    })

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

const mapStateToProps = ({ socket  }) => ({ socket })
const mapDispatchToProps = { callCurrentQuestion }
const StudentLoop = connect(mapStateToProps, mapDispatchToProps)(StudentLoopComponent)

export default StudentLoop;
