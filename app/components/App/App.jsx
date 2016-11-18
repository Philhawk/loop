import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CentreText from '../HomePage/CentreText';
import Login from '../Login/Login';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage">
        <Navbar />
        <CentreText />
      </div>
    );
  }
}
