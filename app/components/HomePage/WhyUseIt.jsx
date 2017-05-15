import React, { Component } from 'react';

/* ---  Component --- */
class WhyUseIt extends Component {

  render() {
// WhyUseIt component
    return (
      <div className="whyuseit">
        <a name="why-use-it"></a>
        <div className="row">
          <div className="col s1 m1 l1">

          </div>
          <div className="col s11 m11 l11 what-is-it-text">
            Why Use It?
          </div>
        </div>
        <div className="row">
          <div className="col s1 m1 l1">
          </div>
          <div className="why-use-it-heading-text col s11 m11 l5">
            Completely re-imagines the student to teacher interaction model in the classroom
          </div>
        </div>
        <div className="row">
          <div className="col s1 m1 l1">
          </div>
          <div className="whatsummary col s11 m11 l5">
            When asked, teachers always comment on the lack of real-time feedback they can get from students. That's where Loop comes in.
          </div>
        </div>
        <div className="row">
          <div className="col s1 m1 l1">
          </div>
          <div className="col s11 m11 l5">
            <a className="button-learn" href="#">Learn More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUseIt;
