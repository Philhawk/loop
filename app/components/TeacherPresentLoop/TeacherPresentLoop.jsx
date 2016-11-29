import React, { Component } from 'react';
import TeacherPresentControlBar from './TeacherPresentControlBar'
import TeacherPresentMainCards from './TeacherPresentMainCards'
import TeacherPresentCardPanel from './CardPanel/TeacherPresentCardPanel'
import TeacherPresentTabbedSection from './TabbedSection/TeacherPresentTabbedSection'
import { endSession } from '../../reducers/session';
import { connect } from 'react-redux';


class TeacherPresentLoopComponent extends Component {
  constructor(props) {
    super(props);
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault();
      this.props.endSession({ session_id: this.props.session.id })
    })
  }

  componentWillUnmount(e) {
    this.props.endSession({ session_id: this.props.session.id })
    window.onbeforeunload = function(e) {
      return "WINDOW CLOSED!!!! :("
    }
  }


  render() {
    return (
      <div className="teacherPresentationContainer">
        <div className="row card teacherPresentationViewMain">
          <div className="col s12 m8 l9 teacherPresentationViewContent">
             <TeacherPresentControlBar />
             <TeacherPresentMainCards />
             <TeacherPresentTabbedSection />
          </div>
          <div className="col s12 m4 l3 z-depth-1 teacherPresentationViewPanel">
             <TeacherPresentCardPanel />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ socket, session }) => ({ socket, session })
const mapDispatchToProps = { endSession }

const TeacherPresentLoop = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentLoopComponent)

export default TeacherPresentLoop;
