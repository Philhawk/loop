import React, { Component } from 'react';
import { Button, Input}  from 'react-materialize';
import { login } from 'APP/app/reducers/auth'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'


class SignUpComponent extends Component {
  constructor() {
    super();
    this.onSignup = this.onSignup.bind(this);

  }

  onSignup(e) {
    e.preventDefault()
    console.log("will make signup route")
    //this.props.Signup(e.target.email.value, e.target.password.value)
    browserHistory.push('/loop')
  }

  render() {
    return (
      <form onSubmit={this.onSignup}>
        <Input name="email" type="email" label="Email" s={12} />
        <Input name="password" type="password" label="Password" s={12} />
        <Input name="name" type="" label="Name" s={12} />
        <Input name="role" type="" label="Role" s={12} />
        <Button waves='light' className="#c2185b pink darken-2">Submit</Button>
      </form>
    )
  }
}

const mapDispatchToProps = {}
const Signup = connect(null, mapDispatchToProps)(SignUpComponent)

export default Signup;
