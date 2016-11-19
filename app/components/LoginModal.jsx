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

  // onLogin(e) {
  //   e.preventDefault()
  //   this.props.login(e.target.email.value, e.target.password.value)
  //   browserHistory.push('/loop')
  // }

  onLoginSelect(e) {
    e.preventDefault()
    this.setState({whois: "login"})
  }

  onSignUpSelect(e) {
    e.preventDefault()
    this.setState({whois: "signup"})
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

      <Modal
        header={(this.state.whois === "login") ? "Please Login" : "Please Signup"}
        fixedFooter
        trigger={
          <Button waves='light'>Login</Button>
        }>

        <Row>
          <Button waves='light' className="#0091ea light-blue accent-4" onClick={this.onLoginSelect}>Login</Button>
          <Button waves='light' className="#0091ea light-blue accent-4"onClick={this.onSignUpSelect}>SignUp</Button>
          {this.showForm()}
        </Row>
      </Modal>
    )
  }
}


export default LoginSignUpComponent;
