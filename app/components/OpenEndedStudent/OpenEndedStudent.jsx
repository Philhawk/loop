import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

class OpenEndedStudentComponent extends Component {
  constructor() {
    super()
    this.state = { submitted: false, answer: '' }
    this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  getInput(e) {
    this.setState({ answer: e.target.value })
    console.log(this.state.answer)
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


  render() {
    return (
      <div className="container" id="student-open-ended">
        <div className="row">
            <form className="col s12">
              <div className="row card-panel z-depth-2">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea id="icon_prefix2" className="materialize-textarea" onChange={this.getInput}></textarea>
                  <label htmlFor="icon_prefix2" >Type your answer here...</label>
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
