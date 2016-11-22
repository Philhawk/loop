import React, { Component } from 'react';
import TeacherPresentControlBar from './TeacherPresentControlBar'
import TeacherPresentMainCards from './TeacherPresentMainCards'
import TeacherPresentCardPanel from './CardPanel/TeacherPresentCardPanel'
import TeacherPresentTabbedSection from './TabbedSection/TeacherPresentTabbedSection'
import { connect } from 'react-redux';

class TeacherPresentLoopComponent extends Component {
  constructor(props) {
    super(props);
    console.log("THIS PROPS", this.props)
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

const mapStateToProps = ({ socket }) => ({ socket })

const TeacherPresentLoop = connect(mapStateToProps)(TeacherPresentLoopComponent)

export default TeacherPresentLoop;
