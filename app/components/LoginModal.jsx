import React, { Component } from 'react';
import { Modal, Button, Row, Input}  from 'react-materialize';
import { login } from 'APP/app/reducers/auth'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

class LoginSignUpComponent extends Component {
  constructor() {
    super();
    this.state = {whois: "login"};
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    e.preventDefault()
    this.props.login(e.target.email.value, e.target.password.value)
    browserHistory.push('/')
  }


  render() {
    return (

      <Modal
        header='Please Login'
        trigger={
          <Button waves='light'>Login</Button>
        }>
        <Row>
          <form onSubmit={this.onLogin}>
            <Input name="email" type="email" label="Email" s={12} />
            <Input name="password" type="password" label="password" s={12} />
            <Button waves='light'>Login</Button>
          </form>
        </Row>
      </Modal>
    )
  }
}

const mapDispatchToProps = {login}
const LoginSignUp = connect(null, mapDispatchToProps)(LoginSignUpComponent)

export default LoginSignUp;
