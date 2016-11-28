import React, { Component } from 'react';
import { connect } from 'react-redux';
import c3 from 'c3'

class MultipleChoiceDataComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this._updateChart();
  }
  
  componentDidUpdate() {
    this._updateChart();
  }
  
  maxCount(data){
    let maxAnswers = data.reduce((a,b) => {
      return (a < b) ? b : a;
    })
    return (maxAnswers) ? maxAnswers : 1;
  }
  
  genSeries(maxValue){
    let values = [0,1];
    
    for(let i =1; i <= maxValue; i++){
      values.push(i+1);  
    }
    
    return values;
  }
  
  
  _updateChart() {
    const chart = c3.generate({
      bindto: '#chart',
      padding: {
         top: 20,
         left: 20,
         right: 20
      },
      data: {
        columns: [
         ['Response',this.props.data[0],this.props.data[1],this.props.data[2],this.props.data[3]] 
       ],
        type: 'bar'
        },
      bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
      axis: {
        x: {
            type: 'category',
            categories: ['A', 'B', 'C', 'D'],
            tick: {
              centered: true
            }
        },
        y: {
          label: {
             text: 'Count',
             position: 'outer-middle',
          },
          tick : {
            values: this.genSeries(this.maxCount(this.props.data)),
            count: this.maxCount(this.props.data)
          },
        }
      }
    })
  }
  
  render() {
    return (
        <div id="chart"></div>
    );
  }
}

const mapStateToProps = ({ data }) => ({ data })
const MultipleChoiceData = connect(mapStateToProps)(MultipleChoiceDataComponent)

export default MultipleChoiceData
