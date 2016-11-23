import React, { Component } from 'react';
import { connect } from 'react-redux';

class MultipleChoiceStudentComponent extends Component {
  constructor() {
    super()
    this.state = { selected: -1}
    this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
  }

  onSubmitAnswer() {
    this.props.socket.emit('submitAnswer', {answer: this.state.selected, sessionString: this.props.session.sessionString})
  }

  render() {
    console.log("selected", this.state.selected)
    return (
      <div className="row" id="student-multiple-choice valign-wrapper">
        {
          this.props.currentQuestion.choices.map((choice, index) => {
            return (
              <div className="col l3 m6 s12 student-answers" key={index}>
                <div className="row">
                  <div className={`card answer hoverable z-depth-1 ${ this.state.selected === index ? "selected" : ""}`}
                       onClick={() => this.setState({ selected: index })}>
                    <form>
                      <p>{choice}</p>
                    </form>
                  </div>
                </div>
              </div>
            )
          })
        }
        <a className="submit-button-student" onClick={this.onSubmitAnswer}>Submit Answer</a>
      </div>
    )
  }
}

const mapStateToProps = ({ currentQuestion, socket, session }) => ({ currentQuestion, socket, session})

const MultipleChoiceStudent = connect(mapStateToProps)(MultipleChoiceStudentComponent)

export default MultipleChoiceStudent;
