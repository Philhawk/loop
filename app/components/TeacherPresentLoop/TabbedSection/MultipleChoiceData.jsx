import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class MultipleChoiceDataComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data = [
      {name: 'A', response: this.props.data[0]},
      {name: 'B', response: this.props.data[1]},
      {name: 'C', response: this.props.data[2]},
      {name: 'D', response: this.props.data[3]}
    ];

    return (
      <ResponsiveContainer>
        <BarChart data={data}
              margin={{top: 20, right: 30, left: 0, bottom: 20}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend margin={{top: 20, right: 0, left: 0, bottom: 0}} />
         <Bar dataKey="response" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = ({ data }) => ({ data })
const MultipleChoiceData = connect(mapStateToProps)(MultipleChoiceDataComponent)

export default MultipleChoiceData
