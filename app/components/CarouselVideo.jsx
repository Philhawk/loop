import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

class CarouselVideo extends Component {

  constructor(){
    super();
  }

  render(){
    return(
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={1}
          enableHeading={true}
          media={{
            '@media (max-width: 1200px)': {
              width: '50vw',
              height: '300px'
            },
            '@media (max-width: 1800px)': {
              width: '50vw',
              height: '300px'
            },
            '@media (max-width: 850px)': {
              width: '60vw',
              height: '300px'
            },
            '@media (max-width: 700px)': {
              width: '80vw',
              height: '200px'
            }
          }}

          >
          <img src='img/vr.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='img/vr.jpg' alt='Album two' data-action="http://passer.cc"/>
          <img src='img/vr.jpg' alt='Album three' data-action="https://doce.cc/"/>
        </Coverflow>
      </StyleRoot>
    )
  }
}

export default CarouselVideo;
