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
            '@media (max-width: 1980px)': {
              width: '40vw',
              height: 'auto'
            },
            '@media (max-width: 1400px)': {
              width: '40vw',
              height: 'auto'
            },
            '@media (max-width: 1200px)': {
              width: '50vw',
              height: 'auto'
            },
            '@media (max-width: 1800px)': {
              width: '50vw',
              height: 'auto'
            },
            '@media (max-width: 850px)': {
              width: '60vw',
              height: 'auto'
            },
            '@media (max-width: 775px)': {
              width: '70vw',
              height: 'auto'
            },
            '@media (max-width: 700px)': {
              width: '80vw',
              height: 'auto'
            }
          }}

          >
          <img src='img/vr.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='img/Adele.jpg' alt='Album two' data-action="http://passer.cc"/>
          <img src='img/bob.jpg' alt='Album three' data-action="https://doce.cc/"/>
        </Coverflow>
      </StyleRoot>
    )
  }
}

export default CarouselVideo;
