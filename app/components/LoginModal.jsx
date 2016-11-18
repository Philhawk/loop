import React, { Component } from 'react';
import { Modal, Button, Row, Input}  from 'react-materialize';
import { login } from 'APP/app/reducers/auth'


export default class LoginSignUp extends Component {
  constructor() {
    super();
    this.state = {whichForm: "login"}
  }

  render() {
    return (

      <Modal
        header='Please Login'
        trigger={
          <Button waves='light'>Login</Button>
        }>
        <Row>
          <form onSubmit={e => { event.preventDefault(), login(event.target.email.value, event.target.password.value)}}>
            <Input type="email" label="Email" s={12} />
            <Input type="password" label="password" s={12} />
            <Button waves='light'>Login</Button>
          </form>
        </Row>
      </Modal>
      )
  }

}
