import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

class CarouselVideo extends Component {

  render() {
    return (
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={1}
          enableHeading={true}
          media={{
            '@media (max-width: 1980px)': {
              width: '40vw',
              height: 'auto',
            },
            '@media (max-width: 1400px)': {
              width: '40vw',
              height: 'auto',
            },
            '@media (max-width: 1200px)': {
              width: '50vw',
              height: 'auto',
            },
            '@media (max-width: 1800px)': {
              width: '50vw',
              height: 'auto',
            },
            '@media (max-width: 850px)': {
              width: '60vw',
              height: 'auto',
            },
            '@media (max-width: 775px)': {
              width: '70vw',
              height: 'auto',
            },
            '@media (max-width: 700px)': {
              width: '80vw',
              height: 'auto',
            },
          }}
        >
          <img src="img/Carousel/pointing.jpg" data-action="http://www.fullstackacademy.com/student-gallery" alt="Students using a computer" />
          <img src="img/Carousel/students-typing.jpg" alt="A teacher reading a screen" data-action="http://www.fullstackacademy.com/student-gallery" />
          <img src="img/Carousel/fullstack-academy.jpg" data-action="http://www.fullstackacademy.com/student-gallery" alt="A class in session" />
        </Coverflow>
      </StyleRoot>
    );
  }
}

export default CarouselVideo;
