import React, { Component } from 'react';


export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Why use it?</a></li>
              <li><a href="sass.html">How it works?</a></li>
              <li><a href="sass.html">About Us</a></li>
              <li><a href="badges.html">Login</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
