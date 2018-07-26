import React from 'react';

const CarouselVideo = () => {
  return (
    <div className="row">
      <div className="col s12 m4 l4">
        <img className="responsive-img" src="img/Carousel/teacherPointing.jpeg" alt="student with cell phone in classroom" data-action="http://www.fullstackacademy.com/student-gallery" />
        <p className="sub-heading-text">Mobile responsive</p>
      </div>
      <div className="col s12 m4 l4">
        <img className="responsive-img" src="img/Carousel/tableDiscussion.jpg" data-action="http://www.fullstackacademy.com/student-gallery" alt="Young girls using tablets sitting at a table" />
        <p className="sub-heading-text">Tablet ready</p>
      </div>
      <div className="col s12 m4 l4">
        <img className="responsive-img" src="img/Carousel/notesMacbook.jpg" data-action="http://www.fullstackacademy.com/student-gallery" alt="Open laptop sitting next to a notepad" />
        <p className="sub-heading-text">Desktop friendly</p>
      </div>
    </div>
  );
};

export default CarouselVideo;
