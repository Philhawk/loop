import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="transparent">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">What Is It</a></li>
            <li><a href="badges.html">Why Use It</a></li>
            <li><a href="collapsible.html">About Us</a></li>
            <li><a href="collapsible.html">Login / Signup</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
