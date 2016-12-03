import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TeacherPresentControlBar from './TeacherPresentControlBar'
import TeacherPresentMainCards from './TeacherPresentMainCards'
import TeacherLoggedIn from './TeacherLoggedIn'
import TeacherPresentCardPanel from './CardPanel/TeacherPresentCardPanel'
import TeacherPresentTabbedSection from './TabbedSection/TeacherPresentTabbedSection'
import { endSession, updateSession } from '../../reducers/session';


class TeacherPresentLoopComponent extends Component {
  constructor(props) {
    super(props);
    window.addEventListener('beforeunload', (ev) => {
      let timeNow = moment();
      let lectureStart = moment(this.props.session.timeStarted)
      let duration = moment.duration(timeNow - lectureStart)
      let formattedTimeDuration = moment(duration.asMilliseconds()).format('mm:ss')
      ev.preventDefault();
      this.props.endSession({
        session_id: this.props.session.id,
        active: false,
        sessionLength: formattedTimeDuration
      })
    })
  }

  render() {
    return (
      <div className="teacherPresentationContainer">
        <div className="row card teacherPresentationViewMain">
          <div className="col s12 m12 l12 teacherPresentationViewContent">
             <TeacherLoggedIn />
             <TeacherPresentControlBar />
             <TeacherPresentMainCards />
             <TeacherPresentTabbedSection />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ socket, session }) => ({ socket, session })
const mapDispatchToProps = { endSession, updateSession }

const TeacherPresentLoop = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentLoopComponent)

export default TeacherPresentLoop;
