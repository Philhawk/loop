import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-materialize';

class TeacherLoggedInComponent extends Component {
  constructor() {
    super();
    this.onEndLecture = this.onEndLecture.bind(this);
  }

  generatePresentorStopButton = () => {
    return (
        <Link to='/post-loop-analysis'><Button waves='light' className="##d32f2f red darken-2" onClick={this.onEndLecture}>Stop Presentation</Button></Link>
    )
  }

  onEndLecture() {
    this.props.socket.emit('teacherEndsLecture', ({
      sessionString: this.props.session.sessionString
    }))
  }

  render() {
    return (
      <div className="row">

          <div className="col s12 card TeacherPresentCurrentUser">
            <h4>{this.props.auth && this.props.auth.name || 'NotLoggedInFail'}</h4>
            {this.generatePresentorStopButton()}
          </div>

        </div>
    )
  }
}

const mapStateToProps = ({auth}) => ({auth})
const mapDispatchToProps = {};
const TeacherLoggedIn = connect(mapStateToProps, mapDispatchToProps)(TeacherLoggedInComponent)

export default TeacherLoggedIn;
