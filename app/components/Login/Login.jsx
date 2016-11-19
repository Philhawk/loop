import React, { Component } from 'react';
import { Button, Input}  from 'react-materialize';
import { login } from 'APP/app/reducers/auth'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

class LoginComponent extends Component {
  constructor() {
    super();
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    e.preventDefault()
    this.props.login(e.target.email.value, e.target.password.value)
    browserHistory.push('/loop')
  }

  render() {
    return (
      <form onSubmit={this.onLogin}>
        <Input name="email" type="email" label="Email" s={12} />
        <Input name="password" type="password" label="Password" s={12} />
        <Button waves='light' className="#c2185b pink darken-2">Submit</Button>
      </form>
    )
  }
}

const mapDispatchToProps = {login}
const Login = connect(null, mapDispatchToProps)(LoginComponent)

export default Login;
