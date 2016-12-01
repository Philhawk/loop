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
    .then(() => browserHistory.push('/create-intro'))
    .catch((err) => console.log("LOGIN FAILED",err))
  }

  render() {
    return (
      <div>
        <form className="form-signin" onSubmit={this.onLogin}>
          <h3 className="form-signin-heading">Login</h3>
          <hr className="colorgraph"></hr>
          <input className="form-control" name="email" placeholder="Username" />
          <input className="form-control" name="password" type="password" placeholder="Password" />
          <Button waves='light' className="#c2185b pink darken-2">Login</Button>
          <Button waves='light' className="#c2185b green darken-2 return-home-signin">
            <Link to="/" className="white-text">Return Home</Link>
          </Button>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = { login }
const Login = connect(null, mapDispatchToProps)(LoginComponent)

export default Login;
