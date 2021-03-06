import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-materialize';

class TeacherLoggedInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStudents: 0
    }
    this.props.socket.on('studentJoined', () => {
      this.setState({ totalStudents: this.state.totalStudents + 1 })
    })
    this.props.socket.on('studentLeft', () => {
      this.setState({ totalStudents: this.state.totalStudents - 1 })
    })
    this.onEndLecture = this.onEndLecture.bind(this);
  }

  generatePresentorStopButton = () => {
    return (
        <Link to='/post-loop-analysis'>
          <Button waves='light' className="##d32f2f red darken-2" onClick={this.onEndLecture}>Stop Presentation</Button>
        </Link>
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

          <div className="col s12 card TeacherPresentCurrentUser" style={{"padding": "20px"}}>
            <h5 className="col s12 m12 l4">{this.props.auth && this.props.auth.name || 'NotLoggedInFail'}</h5>
            <h5 className="col s12 m12 l4">
              Total Students: { this.state.totalStudents }
            </h5>
            <div className="col s12 m12 l4">
              {this.generatePresentorStopButton()}
            </div>
          </div>

      </div>
    )
  }
}

const mapStateToProps = ({auth, socket}) => ({auth, socket})
const mapDispatchToProps = {};
const TeacherLoggedIn = connect(mapStateToProps, mapDispatchToProps)(TeacherLoggedInComponent)

export default TeacherLoggedIn;
