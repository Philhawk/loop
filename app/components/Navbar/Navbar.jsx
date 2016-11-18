//React
import {Link} from 'react-router';
import React, { Component } from 'react';

// For Navbar
import {AppBar, Tabs, Tab, Toolbar, ToolbarGroup, ToolbarTitle, NotificationsIcon} from 'material-ui';
//Cart
import {FontIcon,Badge,IconButton,ActionHome } from 'material-ui';
//Dialog modol
import {FlatButton, RaisedButton, Dialog, TextField} from 'material-ui';
import {Card, CardHeader, CardActions, CardText} from 'material-ui';



//Custom images Logos
const WPLogo = <img src="/logo.png"/> ;

/* ---  Component --- */
class Navbar extends Component {
  constructor() {
    super();
  }

  // temp function to put in for buttons and events
  handleTouchTap() {
  }

  render() {
    // Material UI styles
    const styles = {
      toolbar: {
        'backgroundColor': 'transparent',
        'padding-left': '8px',
        'margin-top': '0.2em',
      }
    };

// icon components
    const logoutIcon =
        <IconButton tooltip="Log Out" >
              <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} onClick={this.props.logoutUser} onTouchTap={this.handleClose}>exit_to_app</FontIcon>
        </IconButton>;


    const houseIcon =
        <IconButton tooltip="My Account" >
            <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} onTouchTap={this.handleOpen}>home</FontIcon>
        </IconButton>;



// Navbar component
    return (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup>
            <Link to='/' className='logo'>{WPLogo}</Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <div>

            </div>
        </ToolbarGroup>
      </Toolbar>
      </div>
    );
  }
}

export default Navbar;
