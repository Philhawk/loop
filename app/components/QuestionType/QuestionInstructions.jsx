import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class QuestionInstructions extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h5> Welcome! Lets Create some questions.</h5>
        <div className="instruction-text">
          <p>Click "CREATE QUESTION" to make questions</p>
          <p>Once you're satisfied with the question you've made, click "SAVE QUESTION" to add it to your queue.</p>
          <p>When you are finished making questions, press the "START PRESENTATION" button to begin.</p>
        </div>
      </div>
    )
  }
}
