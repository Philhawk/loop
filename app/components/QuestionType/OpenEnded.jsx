import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { createQuestion } from 'APP/app/reducers/questionsList';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

class OpenEndedComponent extends Component {
  constructor() {
    super();
    this.onQuestionCreate = this.onQuestionCreate.bind(this);
    this.state = {
      questions: [],
      selectedAnswer: null
    }
  }

  onQuestionCreate(e) {
    e.preventDefault()
    this.props.createQuestion({
      content: e.target.question.value,
      correctAnswer: e.target.answer.value,
      questionType: 'openEnded', // remember to input the correct question type
      choices: [],
      lecture_id: this.props.lecture.id
    })
    // resets all form fields on submit
    e.target.question.value = "";
    e.target.answer.value = "";
  }

  handleTouchTap() {
    this.setState({
      open: true
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div className="card-content">
        <form className="form-signin" onSubmit={this.onQuestionCreate}>
          <h3 className="form-signin-heading">Open Ended</h3>
          <h5 id="formh5">Enter your question in the form below</h5>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" name="question"></textarea>
            <label>Question</label>
          </div>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" name="answer"></textarea>
            <label>Answer</label>
          </div>
          <Button className='#0d47a1 blue darken-4' waves='light' onTouchTap={this.handleTouchTap}>Save question</Button>
          <Snackbar
            open={this.state.open}
            message="Card Created"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ lecture }) => ({ lecture })
const mapDispatchToProps = {createQuestion}
const OpenEnded = connect(mapStateToProps, mapDispatchToProps)(OpenEndedComponent)

export default OpenEnded;
