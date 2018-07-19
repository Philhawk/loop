import React, { Component } from 'react';
import { Modal, Button, Row, Input}  from 'react-materialize';
import { login } from 'APP/app/reducers/auth'
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

  // clears the overlay that is created,
  // when the side nav appears on mobile
  componentDidMount() {
    $('#sidenav-overlay').remove()
      document.body.style = "";
  }

  // will show the login or signup form depending on what was placed on the state
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
          <div className="col s1 m2 l3"></div>
            <Button waves='light' className="#0d47a1 blue darken-4 col s5 m4 l3 login-switchers" onClick={this.onLoginSelect}>Login</Button>
            <Button waves='light' className="#ff8a65 deep-orange lighten-2 col s5 m4 l3 login-switchers" onClick={this.onSignUpSelect}>SignUp</Button>
          <div className="col s1 m2 l3"></div>
          </div>
          <div className="card-panel z-depth-4 font-fam">
            {this.showForm()}
          </div>
        </div>

    )
  }
}


export default LoginSignUpComponent;
