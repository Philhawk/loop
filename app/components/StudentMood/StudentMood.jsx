import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentMoodComponent extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="set-mood">
        <p id="mood-explanation-text">
          Let your teacher know how you're feeling.
        </p>
        <div className="row card small z-depth-2">

          <div className="col s12 m12 l4 center-block change-width-mid">
            <button className="btn-floating btn-large waves-effect teal lighten-2 waves-light thumb-buttons"><i className="material-icons thumbs">thumb_up</i></button>
          </div>

          <div className="col s12 m12 l4 center-block change-width-mid">
            <button className="btn-floating btn-large waves-effect teal lighten-2 waves-light thumb-buttons"><i className="material-icons thumbs">thumbs_up_down</i></button>
          </div>

          <div className="col s12 m12 l4 center-block change-width-mid">
            <button className="btn-floating btn-large waves-effect teal lighten-2 waves-light thumb-buttons"><i className="material-icons thumbs">thumb_down</i></button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {};

const StudentMood = connect()(StudentMoodComponent)

export default StudentMood;
