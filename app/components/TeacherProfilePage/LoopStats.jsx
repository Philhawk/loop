import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoopStatsComponent extends Component {
  constructor() {
    super();
    this.state = {
      averageTime: '',
      sessionTimes: []
    }
  }

  componentDidMount() {
    let sessionTimes = [];
    this.props.lecture.sessions.forEach(session => {
      sessionTimes.push(session.sessionLength)
    })
    this.setState({ sessionTimes })

    let timesInSeconds = [];
    sessionTimes.forEach(time => {
      let timeArray = time.split(':')
      timesInSeconds.push(Number(timeArray[0]) * 60 + Number(timeArray[1]) )
    })
    console.log("TIMESINSECONDS", timesInSeconds)
    let length = timesInSeconds.length;
    let totalTime = timesInSeconds.reduce((a, b) => {
      return a + b;
    })
    let averageTimeInSeconds = Math.floor(totalTime / length);
    let minutes = Math.floor(averageTimeInSeconds / 60);
    let seconds = averageTimeInSeconds % 60;
    console.log("TIIIIIIIIIME", `${minutes}:${seconds}`)
    this.setState({ averageTime: `${minutes}:${seconds}` })
  }

  render() {
    console.log("TIMEEEEEEEE", this.state.averageTime)
    return (
      <div className='row'>
        <div className='col s8'>
          <h3>Loop Name: {this.props.lecture.name}</h3>
          <h4>Loop Description: {this.props.lecture.description}</h4>
        </div>
        <div className='col s4'>
          <h5>Times Ran: {this.props.lecture.sessions.length}</h5>
          <h5>Average Length: {this.state.averageTime}</h5>
          <h5></h5>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ lecture }) => ({ lecture });
const mapDispatchToProps = {};
const LoopStats = connect(mapStateToProps, mapDispatchToProps)(LoopStatsComponent)

export default LoopStats;
