import React, { Component } from 'react';
import { connect } from 'react-redux';
import MultipleChoiceStudent from '../MultipleChoiceStudent/MultipleChoiceStudent';
import OpenEndedStudent from '../OpenEndedStudent/OpenEndedStudent';

class IncomingQuestionComponent extends Component {
  constructor() {
    super();
  }

  // switches out the component displayed,
  // based on the questionType selected by the user
  answerType() {
    if (this.props.currentQuestion.questionType === 'multipleChoice') {
      return <MultipleChoiceStudent />
    } else if (this.props.currentQuestion.questionType === 'fillInTheBlank') {
      return <MultipleChoiceStudent />
    } else if (this.props.currentQuestion.questionType === 'openEnded') {
      return <OpenEndedStudent />
    } else {
      return null;
    }
  }

  render() {
    return (
      <div id="incoming-question">
        <div className="row question-row">
          <div className="col s12 m12 l12 question-incoming">
            <div className="col s2">
              <i className="material-icons md-72 question-icon">help_outline</i>
            </div>
            <div className="col s10">
              <p className="question-incoming">{this.props.currentQuestion.content}</p>
            </div>
          </div>
        </div>
          {this.answerType()}
      </div>
    );
  }
}

const mapStateToProps = ({ currentQuestion }) => ({ currentQuestion });
const IncomingQuestion = connect(mapStateToProps)(IncomingQuestionComponent);

export default IncomingQuestion;
