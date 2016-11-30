import React from 'react';
import { mount, shallow } from 'enzyme';
import { NavItem, Icon } from 'react-materialize';
import {expect} from 'chai';

//Issue with Navbar naming - our components/Navbar/Navbar.jsx is overloading Navbar from react-materialize which is used in file.
import Navbar from '../components/Navbar/Navbar.jsx';

//import jsdom from 'jsdom'
//const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
//global.document = doc
//global.window = doc.defaultView

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};



describe('<Navbar />', function () {
  it('should have LI with login/signout', function () {
    const wrapper = shallow(<Navbar/>);
    expect(wrapper.find('li')).to.have.length(1);
  });
  
  it('contains 3 <NavItem /> components', function () {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(NavItem)).to.have.length(3);
  });
});
