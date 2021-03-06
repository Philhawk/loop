import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router';
import { endSession } from '../../../reducers/session'
import { Button } from 'react-materialize';
import { callStudentAddMood } from '../../../reducers/studentMood';
var SmoothieComponent = require('react-smoothie');

class StudentMoodChartComponent extends Component {
  constructor(props) {
    super(props);
    this.props.socket.on('studentMoodIndex', ({mood}) => {
      this.props.callStudentAddMood({mood: mood})
    })
  }

  componentDidMount() {
    var ts1 = this.refs.chart.addTimeSeries({},{ strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 6 });

    this.dataGenerator = setInterval(() => {
      var time = new Date().getTime();
      var random = Math.random()
      ts1.append(time,(this.props.studentMood));
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.dataGenerator);
  }

  showMoodIndicator() {
    if(this.props.studentMood > 50) {
      return (
        <div style={{color: 'green', display: 'inherit'}}>
          Excellent
        </div>
        )
      } else if (this.props.studentMood < 50 && this.props.studentMood > 0) {
        return(
          <div style={{color: 'green', display: 'inherit'}}>
            Good
          </div>
        )
      } else if (this.props.studentMood < 0 && this.props.studentMood > -50) {
      return(
        <div style={{color: 'red', display: 'inherit' }}>
          Needs Work
        </div>
      )
    } else if (this.props.studentMood > -300 && this.props.studentMood < -50) {
      return(
        <div style={{color: 'red', display: 'inherit' }}>
          Unhappy
        </div>
      )
    } else if (this.props.studentMood < -300) {
      return(
        <iframe src="//giphy.com/embed/3o7yDiinjCb8eegczS" width="260px" height="260px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      )
    }
  }

  render() {
    return (
      <div className="card white">
        <div className="card-content black-text">
          <span className="card-title">{ this.showMoodIndicator() } </span>
            <div style={{overflow: "hidden"}} >
               <SmoothieComponent labels={{fillStyle:'rgb(0, 100, 148)'}} grid={{strokeStyle:'rgb(43, 155, 252)', fillStyle:'rgb(0, 100, 148)', lineWidth: 1, millisPerLine: 250, verticalSections: 6}} ref="chart" width="700px" height="350px"/>
            </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ socket, studentMood, session }) => ({ socket, studentMood, session })
const mapDispatchToProps = { callStudentAddMood, endSession };
const StudentMoodChart = connect(mapStateToProps, mapDispatchToProps)(StudentMoodChartComponent)

export default StudentMoodChart;
