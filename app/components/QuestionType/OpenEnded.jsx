import React, { Component } from 'react';

export default class OpenEnded extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <h5 id="formh5">Enter your question in the form below</h5>
        <form className="col s12" id="openEndedForm">
          <div className="input-field col s12">
            <i className="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
            <label htmlFor="icon_prefix2">Question</label>
          </div>
          <Button waves='light' id="openEndedFormBtn">Save question</Button>
        </form>
      </div>
    )
  }
}
