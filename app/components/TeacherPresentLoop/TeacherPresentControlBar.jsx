import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class TeacherPresentControlBar extends Component {
  constructor() {
    super();
  }
  
  
  paperStyle = {
    height: '3em',
    width: '100%',
    textAlign: 'center',
    padding: '.75em',
    marginTop: '.25em',
    marginBottom: '.25em',
    display: 'inline-block',
  }
  
  generatePresentorLink = (linkURL) => {
    return (
      <div className="col s12 m8 l9">
        <Paper className="presentorLink" style={this.paperStyle} zDepth={2}>
            {linkURL}
        </Paper> 
      </div>
    )
  }; 
  
  startButtonStyle = {
      margin: 10,
      width: '100%',
      float: 'right',
  };

  
  generatePresentorStartButton = () => {
    return (
      <div className="col s12 m7 l7">
        <RaisedButton label="Start" primary={true} style={this.startButtonStyle} />
      </div>
    )
  }
  
  render() {
    return (
        <div className="row">
            <div className="card col s12 m12 l12 teacherPresentationControlBar">
                <div className="row">
                    <div className="col s12 m8 l6">
                      <div className="row">
                        <div className="col s12 m4 l3">
                          <h4>Share Your Loop</h4>
                        </div>
                          {this.generatePresentorLink('https://YouBestBeWatching.com')}
                      </div>
                    </div>
                    <div className="col s12 m4 l6">
                      <div className="row">
                        <div className="col s12 m5 l5">
                          <h4>Social Icons</h4>
                        </div>
                          {this.generatePresentorStartButton()}
                      </div>
                    </div>
                </div>
          </div>
        </div>
    );
  }
}
