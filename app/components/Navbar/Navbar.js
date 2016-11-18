import React, { Component } from 'react';
import LoginModal from '../LoginModal/LoginModal'


export default class Navbar extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="navbar-fixed">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              {<img src="/logo.png"></img>}
            </a>
            <ul className="right hide-on-med-and-down">
              <li className='brand-text'><a href="">Why use it</a></li>
              <li className='brand-text'><a href="">How it works</a></li>
              <li className='brand-text'><a href="">About Us</a></li>
              <li className='brand-text'><a className="waves-effect waves-light btn" href="#modal1">Login</a></li>
            </ul>
            <LoginModal/>
          </div>
        </nav>
      </div>
    );
  }
}
