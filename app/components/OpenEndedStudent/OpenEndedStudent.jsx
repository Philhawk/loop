import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

class OpenEndedStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false, answer: '', correctAnswer: '' };

    this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
    this.getInput = this.getInput.bind(this);

    this.props.socket.on('studentReceieveAnswer', ({ correctAnswer, questionType }) => {
      if (questionType === 'openEnded') {
        this.setState({ correctAnswer });
      }
    });

    this.props.socket.on('newTeacherQuestion', ({ question }) => {
      if (question.questionType === 'openEnded') {
        this.setState({ correctAnswer: '', submitted: false, answer: '' });
        document.getElementById('open-ended-student-answer').value = '';
      }
    });
  }

  getInput(e) {
    this.setState({ answer: e.target.value });
  }

  onSubmitAnswer(e) {
    e.preventDefault();
    this.props.socket.emit('submitOpenEnded', { answer: this.state.answer, sessionString: this.props.session.sessionString });
    this.setState({ submitted: true });
  }

  // prevents disabled button from being able to submit another answer
  onSubmittedButtonClick(e) {
    e.preventDefault();
  }

  // switches button to disabled after a student submits an answer
  showButton() {
    if (this.state.submitted) {
      return <Button className="disabled submit-button-student" onClick={this.onSubmittedButtonClick}>Submitted</Button>;
    } else {
     return <Button className="#0d47a1 blue darken-4 submit-button-student" waves="light" onClick={this.onSubmitAnswer}>Submit Answer</Button>;
    }
  }

  // will render the correct answer once the teacher clicks the reveal button
  showCorrectAnswer() {
    if (this.state.correctAnswer) {
      return (
        <div className="row">
          <div className="col s12">
            <div className="row card-panel z-depth-2">
              <div className="input-field col s12">
                <p>{this.state.correctAnswer}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div id="student-open-ended">
        {this.showCorrectAnswer()}
        <div className="row">
            <form className="col s12">
              <div className="row card z-depth-2">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea id="open-ended-student-answer" className="materialize-textarea" onChange={this.getInput}></textarea>
                  <label htmlFor="open-ended-student-answer" >Type your answer here...</label>
                </div>
                {this.showButton()}
              </div>
            </form>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentQuestion, socket, session }) => ({ currentQuestion, socket, session });

const OpenEndedStudent = connect(mapStateToProps)(OpenEndedStudentComponent);

export default OpenEndedStudent;
