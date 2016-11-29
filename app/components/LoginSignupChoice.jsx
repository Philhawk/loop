import React, { Component } from 'react';
import { Modal, Button, Row, Input}  from 'react-materialize';
import { login } from 'APP/app/reducers/auth'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import Login from './Login/Login';
import SignUp from './Signup/Signup';

class LoginSignUpComponent extends Component {
  constructor() {
    super();
    this.state = {whois: "login"};
    this.onLoginSelect = this.onLoginSelect.bind(this);
    this.onSignUpSelect = this.onSignUpSelect.bind(this);
  }

  onLoginSelect(e) {
    e.preventDefault()
    this.setState({whois: "login"})
  }

  onSignUpSelect(e) {
    e.preventDefault()
    this.setState({whois: "signup"})
  }

  componentDidMount() {
    $('#sidenav-overlay').remove()
      document.body.style = "";
  }

  showForm() {
    if (this.state.whois === "login") {
      return <Login />
    } else if (this.state.whois === "signup") {
      return <SignUp />
    }
  }

  render() {
    return (

        <div>
          <div className="row">
            <Button waves='light' className="#0091ea light-blue accent-4 col l6 m6 s6 login-switchers" onClick={this.onLoginSelect}>Login</Button>
            <Button waves='light' className="#ff8a65 deep-orange lighten-2 col l6 m6 s6 login-switchers" onClick={this.onSignUpSelect}>SignUp</Button>
          </div>
          <div className="card-panel z-depth-4">
            {this.showForm()}
          </div>
        </div>

    )
  }
}


export default LoginSignUpComponent;
