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
            <a href="/" className="brand-logo">
              {/*<img src="../public/images/logo.png"></img>*/}
              Loops
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="">Why use it?</a></li>
              <li><a href="">How it works?</a></li>
              <li><a href="">About Us</a></li>
              <li><a className="waves-effect waves-light btn" href="#modal1">Login</a></li>

            </ul>
            <div id="modal1" className="modal">
              <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div className="modal-footer">
                <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
