import React, { Component } from 'react';
import { connect } from 'react-redux';

class OpenEndedStudentComponent extends Component {
  constructor() {
    super()
  }




  render() {
    return (
      <div className="row" id="student-open-ended">
        <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                  <label for="icon_prefix2">First Name</label>
                </div>
                <a className="waves-effect waves-light btn">Submit</a>
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
