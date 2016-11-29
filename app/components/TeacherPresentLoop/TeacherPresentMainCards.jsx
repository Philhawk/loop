import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router';
import { callRemoveQuestion } from '../../reducers/questionsList';
import { callReset } from '../../reducers/data';
import { callOpenEndedReset} from '../../reducers/openEndedAnswers'
import { endSession } from '../../reducers/session'
import { Button } from 'react-materialize';
import { callStudentAddMood } from '../../reducers/studentMood';
var SmoothieComponent = require('react-smoothie');


class TeacherPresentMainCardsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'startLecture',
      totalStudents: 0
    }
    this.onCurrentCardRemove = this.onCurrentCardRemove.bind(this);
    this.onSendAnswer = this.onSendAnswer.bind(this);
    this.onEndLecture = this.onEndLecture.bind(this);

    this.props.socket.on('studentMoodIndex', ({mood}) => {
      this.props.callStudentAddMood({mood: mood})
    })

    this.props.socket.on('studentJoined', () => {
      this.setState({totalStudents: this.state.totalStudents + 1 })
    })

    this.props.socket.on('studentLeft', () => {
      console.log("STUDENT LEFT!!!")
      this.setState({ totalStudents: this.state.totalStudents - 1 })
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
    axios.put(`/api/sessions/${this.props.session.sessionString}/next`)
    .then((session) => {
      this.props.socket.emit('teacherAsk', {question: this.props.questionsList[1], sessionString: this.props.session.sessionString})
      this.props.callRemoveQuestion();
      this.props.callReset();
      this.props.callOpenEndedReset();
      if (this.props.questionsList.length === 0) {
        this.setState({ button: 'endLecture' })
      } else {
        this.setState({ button: 'revealAnswer' })
      }
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

  onEndLecture() {
    this.props.endSession({ session_id: this.props.session.id })
    this.props.socket.emit('teacherEndsLecture', ({
      sessionString: this.props.session.sessionString
    }))
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
      return (
        <Link to='/post-loop-analysis'><Button waves='light' className="##d32f2f red darken-2" onClick={this.onEndLecture}>End Lecture</Button></Link>
      )
    } else if(this.state.button === 'startLecture') {
      return (
        <Button waves='light' className="#00bfa5 teal accent-4" onClick={this.onCurrentCardRemove}>Start Lecture</Button>
      )
    }
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
        <div className="row card TeacherPresentMainCards">
          <div className="col s12 m8 l8 teacherPresentationCurrentCard">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">Current Card</span>
                <div className="card blue-grey darken-1">
                   <div className="card-content white-text">
                       <span className="card-title">  {this.props.questionsList[0] ? this.props.questionsList[0].content : "No More Questions!"} </span>
                       {
                        this.props.questionsList[0] && this.props.questionsList[0].choices.map((choice, i) => {
                            if(this.props.questionsList.length === 0) {
                              return (
                                <p>Lecture Ended </p>
                              )
                            } else {
                              return (
                              <div className={Number(this.props.questionsList[0].correctAnswer) === i ? 'card blue' : 'card red'}>
                                <div className="card-content white-text">
                                  {choice}
                                </div>
                              </div>
                              )
                            }
                          })
                        }
                   </div>
               </div>
               <p></p>
               {this.showButton()}
              </div>
            </div>
          </div>
          <div className="col s12 m4 l4 teacherPresentationNextCard">
            <div className="card white">
              <div className="card-content black-text">
                <div className="card-title">Total Students: { this.state.totalStudents }</div>
                <span className="card-title">Current Mood: { this.showMoodIndicator() } </span>
                  <div className='mood-box'>
                     <SmoothieComponent ref="chart"/>

                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }


}


const mapStateToProps = ({ questionsList, socket, studentMood, session }) => ({ questionsList, socket, studentMood, session })
const mapDispatchToProps = { callStudentAddMood, callRemoveQuestion, callReset, callOpenEndedReset, endSession };
const TeacherPresentMainCards = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentMainCardsComponent)

export default TeacherPresentMainCards;
