import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
<<<<<<< HEAD
=======
import CentreText from '../HomePage/CentreText';
>>>>>>> 87fbd7ce8a9cd96fca61950ad4c20ca9ae7b3beb

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="homePage">
        <Navbar/>
=======
      <div className="homepage">
        <Navbar/>
        <CentreText />
>>>>>>> 87fbd7ce8a9cd96fca61950ad4c20ca9ae7b3beb
      </div>
    );
  }
}
