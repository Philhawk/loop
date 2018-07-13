import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';


class TeacherProfileSideBarComponent extends Component {
  constructor(props) {
    super(props);

  }

  renderEntitiesOption() {
    if(this.props.auth.role === 'Admin') {
      return (
        <MenuItem containerElement={<Link to="/profile/entities" />} primaryText="View Entities" />
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="col s2" id="teacher-profile-sidebar">
        <div className="row top-row-profile">
            <img className="user-profile-pic" src="/img/genericteacher.jpg" alt="You!"/>
            <h6 className='user-profile-name'>{this.props.auth.name}</h6>
        </div>
        <div className="row">
          <Menu style={{width: "144px"}}>
            <MenuItem containerElement={<Link to="/profile/previousLoops" />} primaryText="Saved Loops" />
            <MenuItem containerElement={<Link to="/create-intro" />} primaryText="Create Loop" />
            {this.renderEntitiesOption()}
          </Menu>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

const TeacherProfileSideBar = connect(mapStateToProps)(TeacherProfileSideBarComponent);

export default TeacherProfileSideBar;
