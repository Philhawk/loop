import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

class OpenEndedStudentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { submitted: false, answer: '', correctAnswer: '' }

    this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
    this.getInput = this.getInput.bind(this);

    this.props.socket.on('studentReceieveAnswer', ({ correctAnswer }) => {
      this.setState({ correctAnswer })
    })

    this.props.socket.on('newTeacherQuestion', () => {
      this.setState({ correctAnswer: '', submitted: false, answer: '' })
      document.getElementById('open-ended-student-answer').value = '';
    })
  }

  getInput(e) {
    this.setState({ answer: e.target.value })
  }

  onSubmitAnswer(e) {
    e.preventDefault()
    this.props.socket.emit('submitOpenEnded', {answer: this.state.answer, sessionString: this.props.session.sessionString})
    this.setState({submitted: true})
  }

  showButton() {
    if (this.state.submitted) {
      return <Button className={ "disabled"}>Submitted</Button>
    } else {
     return <Button className="submit-button-student" onClick={this.onSubmitAnswer}>Submit Answer</Button>
    }
  }

  showCorrectAnswer() {
    if(this.state.correctAnswer) {
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
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="container" id="student-open-ended">
        {this.showCorrectAnswer()}
        <div className="row">
            <form className="col s12">
              <div className="row card-panel z-depth-2">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea id="open-ended-student-answer" className="materialize-textarea" onChange={this.getInput}></textarea>
                  <label htmlFor="open-ended-student-answer" >Type your answer here...</label>
                </div>
              </div>
            </form>
            {this.showButton()}
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentQuestion, socket, session }) => ({ currentQuestion, socket, session })

const OpenEndedStudent = connect(mapStateToProps)(OpenEndedStudentComponent)

export default OpenEndedStudent;
