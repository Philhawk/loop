import React, { Component } from 'react';
import { connect } from 'react-redux';

class OpenEndedStudentComponent extends Component {
  constructor() {
    super()
  }




  render() {
    return (
      <div className="container" id="student-open-ended">
        <div className="row">
            <form className="col s12">
              <div className="row card-panel z-depth-2">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                  <label for="icon_prefix2">Type your answer here...</label>
                </div>
                <a className="submit-button-student" href="#">Submit Answer</a>
              </div>
            </form>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentQuestion }) => ({ currentQuestion })

const OpenEndedStudent = connect(mapStateToProps)(OpenEndedStudentComponent)

export default OpenEndedStudent;
