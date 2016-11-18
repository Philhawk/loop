import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage">
        <Navbar style={{"color":"black"}}/>
      </div>
    );
  }
}
