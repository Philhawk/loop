import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeacherProfileSideBar from './TeacherProfileSideBar'

class TeacherProfilePageComponent extends Component {

  constructor(){
    super();
  }

  render(){
    return(
      <div className="row" id="teacher-profile-page">
        <TeacherProfileSideBar auth={ this.props.auth }/>
        <div className="col s10">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ lectureList, auth }) => ({ lectureList, auth });
const mapDispatchToProps = {};

const TeacherProfile = connect(mapStateToProps, mapDispatchToProps)(TeacherProfilePageComponent);

export default TeacherProfile;
