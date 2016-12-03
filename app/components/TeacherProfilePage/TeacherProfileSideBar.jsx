import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';


class TeacherProfileSideBar extends Component {
  constructor(props) {
    super(props);

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
          </Menu>
        </div>
      </div>
    )
  }
}

export default TeacherProfileSideBar;
