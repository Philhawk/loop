import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import AboveFold from '../HomePage/AboveFold';
import WhatIsIt from '../HomePage/WhatIsIt';
import WhyUseIt from '../HomePage/WhyUseIt';
import AboutUs from '../HomePage/AboutUs';
import Footer from '../HomePage/Footer';


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
        <WhyUseIt />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}
