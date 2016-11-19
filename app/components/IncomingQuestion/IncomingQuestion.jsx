import React, { Component } from 'react';

export default class StudentLoop extends Component {
  constructor() {
    super();
  }

  answerType(){
    if(this.props.currentQuestion.type === 'multipleChoice') {
      return <MultipleChoiceStudent />
    } else if(this.props.currentQuestion.type === "fillInTheBlank") {
      return <FillInTheBlankStudent />
    } else if(this.props.currentQuestion.type === "openEnded") {
      return <OpenEndedStudent />
    } else {
      return null;
    }
  }

  render() {
    return (
      <div id="incoming-question">
        <div className="row">
          <div className="col s12 m12 l12 question-incoming">
            <i className="material-icons md-72 question-icon">help_outline</i>
            <h2 className="question-incoming">THIS IS A QUESTION</h2>
          </div>
        </div>
        <div className="row">
          {this.answerType()}
        </div>
      </div>
    );
  }


}
