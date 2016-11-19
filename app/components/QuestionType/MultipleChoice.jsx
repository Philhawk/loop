import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class MultipleChoice extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <form>
          <div className="input-field col s12">
            <input id="question" name="question" type="text"/>
            <label htmlFor="question">Question</label>
          </div>
          <div className="input-field col s12">
            <input id="answer_A" name="answer_A" type="text"/>
            <label htmlFor="answer_A">A</label>
          </div>
          <div className="input-field col s12">
            <input id="answer_B" name="answer_B" type="text"/>
            <label htmlFor="answer_B">B</label>
          </div>
          <div className="input-field col s12">
            <input id="answer_C" name="answer_C" type="text"/>
            <label htmlFor="answer_C">C</label>
          </div>
          <div className="input-field col s12">
            <input id="answer_D" name="answer_D" type="text"/>
            <label htmlFor="answer_D">D</label>
          </div>
          <div>
            <p>Correct Answer</p>
            <Input name='correct' type='radio' value='A' label='A' className='with-gap' />
            <Input name='correct' type='radio' value='B' label='B' className='with-gap' />
            <Input name='correct' type='radio' value='C' label='C' className='with-gap' />
            <Input name='correct' type='radio' value='D' label='D' className='with-gap' />
          </div>
        </form>
      </div>
    )
  }
}
