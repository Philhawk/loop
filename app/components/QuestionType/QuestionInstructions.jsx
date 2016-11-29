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
          <p>Once your satisfied with the question you've made, click "SAVE QUESTION".</p>
          <p>When you've finished making questions, press the "START PRESENTATION" button.</p>
        </div>
      </div>
    )
  }
}
