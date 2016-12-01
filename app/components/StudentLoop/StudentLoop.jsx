import React, { Component } from 'react';
import IncomingQuestion from '../IncomingQuestion/IncomingQuestion';
import StudentAsk from '../StudentAsk/StudentAsk';
import StudentMood from '../StudentMood/StudentMood';
import { callSetCurrentQuestion } from '../../reducers/currentQuestion';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

class StudentLoopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'studentQustionsForTeacher'
    }
    this.props.socket.on('newTeacherQuestion', ({question}) => {
      console.log(question)
      this.props.callSetCurrentQuestion({ content: question.content, choices: question.choices, questionType: question.questionType
      })
    })

    this.props.socket.on('endStudentLecture', () => {
      browserHistory.push('/post-loop-student-analysis')
    })

  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  componentWillUnmount() {
    console.log("YO YO YO", this.props)
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
          <div className="col s12 no-padding">
            <div className="card z-depth-2">
              <IncomingQuestion />
            </div>
          </div>
        </div>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="Questions" value="studentQustionsForTeacher">
            <div>
              <h2 style={styles.headline}>Questions</h2>
                <StudentAsk />
            </div>
          </Tab>
          <Tab label="Your Mood" value="yourMood">
            <div>
              <h2 style={styles.headline}>Your Mood</h2>
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
