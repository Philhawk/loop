import React, { Component } from 'react';
import { Button } from 'react-materialize';

class NameLoopPanel extends Component {

  constructor(){
    super();
  }

  render(){
    return(
      <div className="col s12 card-panel z-depth-3">
        <form onSubmit={this.onNameLoop}>
          <div className="input-field inline card-content">
            <span className="card-title">Name Your Loop Below</span>
            <input id="loop-name" name="loopName" type="text" />
            <span className="card-title">Describe Your Loop Below</span>
            <textarea id="loop-description" name="loopDescription" className="materialize-textarea"></textarea>
          </div>
          <div className="card-action">
            <Button className="createBtnBox">Create Loop</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default NameLoopPanel;
