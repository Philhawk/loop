import React, { Component } from 'react';
import { Button, Input}  from 'react-materialize';
import { signup } from 'APP/app/reducers/auth'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'


class SignUpComponent extends Component {
  constructor() {
    super();
    this.onSignup = this.onSignup.bind(this);
  }

  onSignup(e) {
    e.preventDefault()
    this.props.signup({
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
      role: e.target.role.value})
    browserHistory.push('/loop')
  }

  render() {
    return (
      <div>
        <form className="form-signin" onSubmit={this.onSignup}>
          <h3 className="form-signin-heading">Sign Up</h3>
          <hr className="colorgraph"></hr>
          <Input className="form-control" name="name" type="" placeholder="Name" s={12} />
          <Input className="form-control" name="email" type="email" placeholder="Email" s={12} />
          <Input className="form-control" name="password" type="password" placeholder="Password" s={12} />
          <Input className="form-control" name="role" type="" placeholder="Role" s={12} id="role-field" />
          <Button waves='light' className="#c2185b pink darken-2">Submit</Button>
          <Button waves='light' className="#c2185b green darken-2 return-home-signin">
            <Link to="/" className="white-text">Return Home</Link>
          </Button>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = { signup }
const Signup = connect(null, mapDispatchToProps)(SignUpComponent)

export default Signup;
