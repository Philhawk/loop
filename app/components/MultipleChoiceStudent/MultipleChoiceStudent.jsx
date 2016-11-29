import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

class MultipleChoiceStudentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: -1, submitted: false, correctAnswer: -1}
    this.onSubmitAnswer = this.onSubmitAnswer.bind(this);

    this.props.socket.on('newTeacherQuestion', ({ question }) => {
      if (question.questionType === 'multipleChoice') {
        this.setState({submitted: false})
        this.setState({ selected: -1, correctAnswer: -1 })
      }
    })
    this.props.socket.on('studentReceieveAnswer' , ({ correctAnswer, questionType }) => {
      if(questionType === 'multipleChoice') {
        this.setState({ correctAnswer })
      }
    })
  }

  onSubmitAnswer() {
    this.props.socket.emit('submitMultipleChoice', {answer: this.state.selected, sessionString: this.props.session.sessionString})
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
      <div className="row" id="student-multiple-choice valign-wrapper">
        {
          this.props.currentQuestion.choices.map((choice, index) => {
            return (
              <div className="col l3 m6 s12 student-answers" key={index}>
                <div className="row">
                { Number(this.state.correctAnswer) === index ? <p style={{color: 'green'}}>Correct Answer!</p> : null }
                  <div className={ `card answer hoverable z-depth-1 ${ this.state.selected === index ? "selected" : ""} ${ Number(this.state.correctAnswer) === index ? "correct": ""}`} onClick={() => this.setState({ selected: index })}>
                      <p>{choice}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
        {
          this.showButton()
        }
      </div>
    )
  }
}

const mapStateToProps = ({ currentQuestion, socket, session }) => ({ currentQuestion, socket, session})

const MultipleChoiceStudent = connect(mapStateToProps)(MultipleChoiceStudentComponent)

export default MultipleChoiceStudent;
