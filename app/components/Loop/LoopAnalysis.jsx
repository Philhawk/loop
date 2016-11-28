import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class LoopAnalysis extends Component {
  constructor() {
    super();
  }


  render() {
    let timeNow = moment();
    let lectureStart = moment(this.props.session.timeStarted)
    let duration = moment.duration(timeNow - lectureStart)
    let formattedTimeDuration = moment(duration.asMilliseconds()).format('mm:ss')

    return (

      <div>
          <h1>Time: { formattedTimeDuration }</h1>

          {
          this.props.studentQuestions.map((question) => (
            <p> {question.content}</p>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ({ session, studentQuestions }) => ({ session, studentQuestions })
const Loop = connect(mapStateToProps)(LoopAnalysis)

export default Loop;
