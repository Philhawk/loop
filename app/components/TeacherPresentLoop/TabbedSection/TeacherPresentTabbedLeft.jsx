import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Button} from 'react-materialize';
import { connect } from 'react-redux';
import { createStudentQuestion, answerQuestion, studentRemoveQuestion } from '../../../reducers/studentQuestions';
import store from '../../../store';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class TeacherPresentTabbedLeftComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.props.socket.on('newStudentQuestion', ({ question }) => {
      console.log(question)
      this.props.createStudentQuestion({questionContent: question, answered: false, session_id: this.props.session.id })
    })
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="card">
          <span className="card-title">
          Questions
          </span>
          <div>
            {
              this.props.studentQuestions.map((question, i) => (
                <div className="row student-question" key={i}>
                  <p className="col s10">{question.content}</p>
                  <span className="col s2 student-question-button">
                    <Button
                      floating

                      className="red"
                      waves="light"
                      icon="done"
                      onClick={() => {
                        this.props.studentRemoveQuestion(i)
                        this.props.answerQuestion(question)
                      }}
                     />
                  </span>
                </div>
                )
              )
            }
          </div>

      </div>
    );
  }
}


const mapStateToProps = ({ socket, studentQuestions, session }) => ({ socket, studentQuestions, session })
const mapDispatchToProps = { createStudentQuestion, answerQuestion, studentRemoveQuestion }
const TeacherPresentTabbedLeft = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentTabbedLeftComponent)

export default TeacherPresentTabbedLeft;
