import React, { Component } from 'react';
import { connect } from 'react-redux'

class StudentLandingPageComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <div className='row card'>
          <h2>Join A Loop Below</h2>
        </div>
        {
          this.props.activeSessions.map((session, i) => (
            <div className='row card' key={i}>
              <p className='card-title'>Lecture Title: {session.lecture.title}</p>
              <p className='card-title'>Teacher: {session.lecture.teacher.name}</p>
              <p className='card-title'>Link: <a href={session.bitly}>Join Loop</a></p>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ activeSessions }) => ({ activeSessions })
const StudentLandingPage = connect(mapStateToProps)(StudentLandingPageComponent)

export default StudentLandingPage;
