import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import AboveFold from '../HomePage/AboveFold';
import WhatIsIt from '../HomePage/WhatIsIt';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage">
        <Navbar/>
        <AboveFold />
        <WhatIsIt />
      </div>
    );
  }
}
