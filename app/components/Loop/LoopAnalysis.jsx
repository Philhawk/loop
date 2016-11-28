import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoopAnalysis extends Component {
  constructor() {
    super();
  }


  render() {
    console.log("PROPS", this.props)
    return (

      <div>
          <h1>Time: { Date.now - this.props.session.timeStarted }</h1>
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
