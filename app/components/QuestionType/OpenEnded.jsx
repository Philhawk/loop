import React, { Component } from 'react';
import { Button } from 'react-materialize';

export default class OpenEnded extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <h5 id="formh5">Enter your question in the form below</h5>
        <form className="col s12">
          <div className="input-field col s12">
            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
            <label htmlFor="icon_prefix2">Question</label>
          </div>
          <Button waves='light'>Save question</Button>
        </form>
      </div>
    )
  }
}
