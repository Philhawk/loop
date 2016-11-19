import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

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
  
  
  render() {
    return (
        <div className="row">
            <div className="col s12 m12 l12 teacherPresentationControlBar">
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
                      ControlBar
                    </div>
                </div>
          </div>
        </div>
    );
  }
}
