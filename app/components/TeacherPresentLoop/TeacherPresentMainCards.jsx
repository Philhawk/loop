import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router';
import { callRemoveQuestion } from '../../reducers/questionsList';
import { callReset } from '../../reducers/data';
import { callOpenEndedReset} from '../../reducers/openEndedAnswers'
import { Button } from 'react-materialize';
import { callStudentAddMood } from '../../reducers/studentMood';
var SmoothieComponent = require('react-smoothie');


class TeacherPresentMainCardsComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        button: 'nextCard'
      }
      this.onCurrentCardRemove = this.onCurrentCardRemove.bind(this);
      this.onSendAnswer = this.onSendAnswer.bind(this);
      this.props.socket.on('studentMoodIndex', ({mood}) => {
        this.props.callStudentAddMood({mood: mood})
    })
  };

  componentDidMount() {
    console.log('what is the props', this.props)
    var ts1 = this.refs.chart.addTimeSeries({},{ strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 8 });

    this.dataGenerator = setInterval(() => {
      var time = new Date().getTime();
      var random = Math.random()
      console.log('what is the studentMood: ', this.props.studentMood)
      ts1.append(time,(this.props.studentMood / 100));
    }, 500)
  }


  componentWillUnmount() {
    clearInterval(this.dataGenerator);
  }

  onCurrentCardRemove(){
    if (this.props.questionsList.length === 0) {
      this.setState({ button: 'endLecture' })
    }
    axios.put(`/api/sessions/${this.props.session.sessionString}/next`)
    .then((session) => {
      console.log("SESSIONDATA", session.data)
      this.props.socket.emit('teacherAsk', {question: this.props.questionsList[1], sessionString: this.props.session.sessionString})
      this.props.callRemoveQuestion();
      this.props.callReset();
      this.props.callOpenEndedReset();
      this.setState({ button: 'revealAnswer' })
    })
  }

  onSendAnswer(e) {
    e.preventDefault()
    this.props.socket.emit('teacherSendAnswer', ({
      correctAnswer: this.props.questionsList[0].correctAnswer,
      sessionString: this.props.session.sessionString,
      questionType: this.props.questionsList[0].questionType
    }))
    this.setState({ button: 'nextCard' })
  }

  showButton() {
    if(this.state.button === 'nextCard') {
      return (
        <Button waves='light' className="#0091ea light-blue accent-4" onClick={this.onCurrentCardRemove}>Next Card</Button>
      )
    } else if(this.state.button === 'revealAnswer') {
      return (
        <Button waves='light' className="#0d47a1 blue darken-4" onClick={this.onSendAnswer}>Reveal Answer</Button>
      )
    } else if(this.state.button === 'endLecture') {
      <Button waves='light' className="##d32f2f red darken-2"><Link to='/post-loop-analysis'>End Lecture</Link></Button>
    }
  }


  render() {
    return (
        <div className="row card TeacherPresentMainCards">
          <div className="col s12 m8 l8 teacherPresentationCurrentCard">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">Current Card</span>
                <div className="card blue-grey darken-1">
                   <div className="card-content white-text">
                       <span className="card-title"> {this.props.questionsList[0].content} </span>
                       {
                        this.props.questionsList[0].choices.map((choice, i) => (
                           <p> {choice} </p>
                          )
                        )
                       }
                   </div>
               </div>
               {this.showButton()}
              </div>
            </div>
          </div>
          <div className="col s12 m4 l4 teacherPresentationNextCard">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">Current Mood
                  <div>
                     <SmoothieComponent ref="chart" width="200" height="200"/>
                     {
                        this.props.studentMood
                     }
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
  }


}


const mapStateToProps = ({ questionsList, socket, studentMood, session }) => ({ questionsList, socket, studentMood, session })
const mapDispatchToProps = { callStudentAddMood, callRemoveQuestion, callReset, callOpenEndedReset };
const TeacherPresentMainCards = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentMainCardsComponent)

export default TeacherPresentMainCards;
