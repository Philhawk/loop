import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from '@material-ui/core/Tabs';
import { PieChart, Pie, BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {List, ListItem} from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import {grey400, darkBlack, lightBlack} from '@material-ui/core/colors';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class LoopStatsComponent extends Component {
  constructor() {
    super();
    this.state = {
      averageTime: '',
      sessionTimes: [],
      responses: []
    }
  }

  componentDidMount() {
    // push all the session lengths to an array and put them on the component state
    let sessionTimes = [];
    this.props.lecture.sessions.forEach(session => {
      sessionTimes.push(session.sessionLength)
    })
    this.setState({ sessionTimes })


    // Student Mood Per Question

    // for each session length, convert it to time in seconds
    let timesInSeconds = [];
    sessionTimes.forEach(time => {
      let timeArray = time.split(':')
      timesInSeconds.push(Number(timeArray[0]) * 60 + Number(timeArray[1]) )
    })

    // sum up all the times in seconds to get a total time in seconds
    let length = timesInSeconds.length;
    let totalTime = timesInSeconds.reduce((a, b) => {
      return a + b;
    })

    // get the average time in seconds and then compute the average time in 'mm:ss' format
    // then set the state of average time to the result
    let averageTimeInSeconds = Math.floor(totalTime / length);
    let minutes = Math.floor(averageTimeInSeconds / 60);
    let seconds = averageTimeInSeconds % 60;
    seconds = seconds < 10 ? String('0' + seconds) : seconds;
    this.setState({ averageTime: `${minutes}:${seconds}` })

    // set up a responses array that will hold the results of every question
    let responses = []

    // map over each question and perform a different operation depending on question type
    this.props.lecture.questions.map((question, i) => {

      // if multiple choice, compute a data object with keys of every time an answer was selected
      // then push to the responses array at the end
      if(question.questionType === 'multipleChoice') {
        let data = { question: question.content, type: 'multipleChoice', a: 0, b: 0, c: 0, d: 0, choices: question.choices, correctAnswer: question.correctAnswer }
        question.responses.forEach((response, i) => {
            if (response.userResponse === '0') data.a = data.a + 1
            else if (response.userResponse === '1') data.b = data.b + 1
            else if (response.userResponse === '2') data.c = data.c + 1
            else if (response.userResponse === '3') data.d = data.d + 1
        })
        responses.push(data)

        //if open ended, push all responses to the data array and then push into the results array
      } else if (question.questionType === 'openEnded') {
        let data = {question: question.content, type: 'openEnded', answers: [], correctAnswer: question.correctAnswer }
        question.responses.forEach(response => {
          data.answers.push(response.userResponse)
        })
        responses.push(data)
      }
    })
    // set the state with the responses
    this.setState({ responses })
  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  }

  render() {

    return (

      <div className="row backgroundCardOther">
        <div className='col s12 m12 l12 card no-pad-tab-view'>
          <Tabs
           value={this.state.value}
           onChange={this.handleChange}
         >
           <Tab label="Loop Data" value="a" >
             <div>
               <h2 style={styles.headline}>Loop Data</h2>
               <div className="row">
                <div className='col s12 m12 l12'>
                  <div className='row'>
                    <div className='col s12 m4 l4'>
                      <div className="card-panel-palette-grey loop-stats-card">
                        <p> Name </p>

                        <h4> {this.props.lecture.name} </h4>
                      </div>
                    </div>
                    <div className='col s12 m4 l4'>
                      <div className="card-panel-palette-darkblue loop-stats-card">
                        <p> Times Played </p>

                        <h4> {this.props.lecture.sessions.length}</h4>
                      </div>                    </div>
                    <div className='col s12 m4 l4'>
                      <div className="card-panel-palette-lightblue loop-stats-card">
                      <p> Average Duration </p>

                      <h4> {this.state.averageTime} </h4>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
             </div>
             <div>

              <Tabs value={this.state.value} onChange={this.handleChange} >
                { this.state.responses && this.state.responses.map((response, i) => {

                return(
                     <Tab label={`Q` + (i + 1)} value={response.question.content} >
                      <div className='row'>
                        <div className='col s12 m8 l8 no-padding-on-stats-view'>
                          <div className="card-panel-palette-grey loop-questions-card">
                            <p> Question </p>
                            <h4> {response.question} </h4>
                          </div>
                        </div>
                        <div className='col s12 m4 l4 no-padding-on-stats-view'>
                          <div className="card-panel-palette-darkblue loop-questions-card">
                            <p> Answer </p>
                            <h4>
                              { response.type === 'multipleChoice' ? response.choices[response.correctAnswer] : response.correctAnswer }
                            </h4>
                          </div>
                        </div>
                      </div>

                       {


                        (response.type === 'multipleChoice') ? (
                          <ResponsiveContainer>
                            <BarChart data={
                              [
                                {name: response['choices'][0], response: response['a']},
                                {name: response['choices'][1], response: response['b']},
                                {name: response['choices'][2], response: response['c']},
                                {name: response['choices'][3], response: response['d']}
                              ]
                            }
                                  margin={{top: 20, right: 30, left: 0, bottom: 20}}>
                             <XAxis dataKey="name"/>
                             <YAxis/>
                             <CartesianGrid strokeDasharray="3 3"/>
                             <Tooltip/>
                             <Legend margin={{top: 20, right: 0, left: 0, bottom: 0}} />
                             <Bar dataKey='response' fill="#82ca9d" />
                            </BarChart>
                          </ResponsiveContainer>
                         ) : (

                         <div className="col s12 card" key={i}>
                           <h5>{response.question}</h5>
                           {
                            response.answers.map((response, i) => {
                              return (

                                <List>
                                  <ListItem
                                    leftAvatar={<Avatar src="https://tracker.moodle.org/secure/attachment/30912/f3.png" size={50}/>}
                                    secondaryText={
                                      <p>
                                        <br/>
                                        <span style={{color: darkBlack}}>{response}</span>

                                      </p>
                                    }
                                    secondaryTextLines={2}
                                  />
                                  <Divider inset={true} />
                                </List>
                              )
                            })
                          }
                          </div>
                        )


                      }

                     </Tab>
                   )
                 })
               }
              </Tabs>


             </div>
           </Tab>
         </Tabs>
        </div>
      </div>


    )
  }
}

const mapStateToProps = ({ lecture }) => ({ lecture });
const mapDispatchToProps = {};
const LoopStats = connect(mapStateToProps, mapDispatchToProps)(LoopStatsComponent)

export default LoopStats;

// { this.state.responses && this.state.responses.map((response, i) => {
//
//   return(
//       <Tabs value={this.state.value} onChange={this.handleChange} >
//         <Tab label={`Q` + (i + 1)} value={response.question} >
//           <div>
//             <h2 style={styles.headline}>Controllable Tab A</h2>
//             <p>
//
//             </p>
//           </div>
//         </Tab>
//       </Tabs>
//     )
//   })
// }


// <div>
//   <div className='row'>
//     <div className='col s8'>
//       <h3>Loop Name: {this.props.lecture.name}</h3>
//       <h4>Loop Description: {this.props.lecture.description}</h4>
//     </div>
//     <div className='col s4'>
//       <h5>Times Ran: {this.props.lecture.sessions.length}</h5>
//       <h5>Average Length: {this.state.averageTime}</h5>
//     </div>
//   </div>
//     <div className="row">
//       {
//       this.state.responses && this.state.responses.map((response, i) => {
//         return response.type === 'multipleChoice' ?
//
//             <div className="col s12 card" key={i}>
//               <h5>{response.question}</h5>
//               <p>{response.choices[0]}: {response.a}</p>
//               <p>{response.choices[1]}: {response.b}</p>
//               <p>{response.choices[2]}: {response.c}</p>
//               <p>{response.choices[3]}: {response.d}</p>
//             </div>
//          :
//          <div className="col s12 card" key={i}>
//            <h5>{response.question}</h5>
//            {
//             response.answers.map((response, i) => {
//               return (
//                 <p>{response}</p>
//               )
//             })
//           }
//           </div>
//       })
//     }
//     </div>
// </div>
