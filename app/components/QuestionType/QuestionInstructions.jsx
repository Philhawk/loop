import React, { Component } from 'react';

export default class QuestionInstructions extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='question-instructions-main'>
        <h4 className='header-text-for-instructions'> Open up your class to everyone.</h4>
        <div className="instruction-text">
          <p> Loops are made to be discovered,</p>
          <p> Once you create a Loop, it'll be visible to students anywhere. Let them join the conversation in your virtual classroom</p>
        </div>
      </div>
    )
  }
}
