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
    .then(() => browserHistory.push('/profile/previousLoops'))
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
          <Button waves='light' className="#0d47a1 blue darken-4">Login</Button>
          <Button waves='light' className="#546e7a blue-grey darken-1 return-home-signin">
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
