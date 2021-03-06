import React, { Component } from 'react';
import OurNavbar from '../Navbar/Navbar';
import AboveFold from '../HomePage/AboveFold';
import WhatIsIt from '../HomePage/WhatIsIt';
import WhyUseIt from '../HomePage/WhyUseIt';
import AboutUs from '../HomePage/AboutUs';
import Footer from '../HomePage/Footer';


export default class App extends Component {

  render() {
    return (
      <div className="homepage">
        <OurNavbar />
        <AboveFold />
        <WhatIsIt />
        <WhyUseIt />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}
