import React, { Component } from 'react';
import LoginModal from '../LoginModal';
import { Navbar, NavItem, Icon } from 'react-materialize';


export default class OurNavbar extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Navbar brand={<img src="/logo.png"></img>} right className="transparent z-depth-0">
        <NavItem className="brand-text" href="">Why use it</NavItem>
        <NavItem className="brand-text" href="">How it works</NavItem>
        <NavItem className="brand-text" href="">About Us</NavItem>
        <li className="brand-text"><LoginModal/></li>

      </Navbar>
    );
  }
}
