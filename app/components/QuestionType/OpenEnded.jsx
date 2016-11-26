import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { createQuestion } from 'APP/app/reducers/questionsList';
import { connect } from 'react-redux';

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
      correctAnswer: "",
      questionType: 'openEnded', // remember to input the correct question type
      choices: []
    })
    // resets all form fields on submit
    e.target.question.value = "";
  }

  render() {
    return (
      <div className="card-content">
        <form className="form-questions" onSubmit={this.onQuestionCreate}>
          <h3 className="form-signin-heading">Open Ended</h3>
          <h5 id="formh5">Enter your question in the form below</h5>
          <div className="input-field col s12">
            <textarea id="icon_prefix2" className="materialize-textarea" name="question"></textarea>
            <label htmlFor="icon_prefix2">Question</label>
          </div>
          <Button waves='light'>Save question</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {createQuestion}
const OpenEnded = connect(null, mapDispatchToProps)(OpenEndedComponent)

export default OpenEnded;

