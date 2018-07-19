import React, { Component } from 'react';
import IncomingQuestion from '../IncomingQuestion/IncomingQuestion';
import StudentAsk from '../StudentAsk/StudentAsk';
import StudentMood from '../StudentMood/StudentMood';
import { callSetCurrentQuestion } from '../../reducers/currentQuestion';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core/Tabs';

class StudentLoopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'studentQustionsForTeacher'
    }
    this.props.socket.on('newTeacherQuestion', ({question}) => {
      this.props.callSetCurrentQuestion({ content: question.content, choices: question.choices, questionType: question.questionType
      })
    })

    this.props.socket.on('endStudentLecture', () => {
      browserHistory.push('/post-loop-student-analysis')
    })

  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  };

  componentWillUnmount() {
    this.props.socket.emit('something', { sessionString: this.props.session.sessionString })
  }


  render() {

    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

    return (
      <div id="student-view">
        <div className="row">
          <div className="col s12">
            <div className="card z-depth-2">
              <IncomingQuestion />
            </div>
          </div>
        </div>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="Questions" value="studentQustionsForTeacher">
            <div>
              <StudentAsk />
            </div>
          </Tab>
          <Tab label="Your Mood" value="yourMood">
            <div>
              <StudentMood />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = ({ socket, questionsList, session }) => ({ socket, questionsList, session })
const mapDispatchToProps = { callSetCurrentQuestion }
const StudentLoop = connect(mapStateToProps, mapDispatchToProps)(StudentLoopComponent)

export default StudentLoop;
