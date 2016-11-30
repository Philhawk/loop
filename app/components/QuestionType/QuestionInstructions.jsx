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
        <h4 className='header-text-for-instructions'> Now, let's create some questions.</h4>
        <div className="instruction-text">
          <p>Click a <b>CREATE</b> button to make questions.</p>
          <p>Once you're satisfied with the question you've made, click <b>SAVE QUESTION</b> to add it to your queue.</p>
          <p>When you are finished making questions, press the <b>START PRESENTATION</b> button above to begin.</p>
        </div>
      </div>
    )
  }
}
