import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router';

export default class OurNavbar extends Component {

  render() {
    return (
      <Navbar brand={<img src="/logo.png"></img>} right className="transparent z-depth-0">
        <NavItem className="brand-text" href="#what-is-it">What Is It</NavItem>
        <NavItem className="brand-text" href="#why-use-it">Why Use It</NavItem>
        <NavItem className="brand-text" href="#about-us">About Us</NavItem>
        <li className="brand-text"> <Link to="/welcome">Login | Signup</Link></li>
      </Navbar>
    );
  }
}
