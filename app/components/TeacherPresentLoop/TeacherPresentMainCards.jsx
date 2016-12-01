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
import TeacherPresentCardPanel from './CardPanel/TeacherPresentCardPanel';

class TeacherPresentMainCardsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'startLecture',
      totalStudents: 0,
      revealAnswer: false
    }
    this.onCurrentCardRemove = this.onCurrentCardRemove.bind(this);
    this.onSendAnswer = this.onSendAnswer.bind(this);
    this.onEndLecture = this.onEndLecture.bind(this);
  };

  onCurrentCardRemove(){
    axios.put(`/api/sessions/${this.props.session.sessionString}/next`)
    .then((session) => {
      this.props.socket.emit('teacherAsk', {question: this.props.questionsList[1], sessionString: this.props.session.sessionString})
      this.props.callRemoveQuestion();
      this.props.callReset();
      this.props.callOpenEndedReset();
      if (this.props.questionsList.length === 0) {
        this.setState({ button: 'endLecture', revealAnswer: false })
      } else {
        this.setState({ button: 'revealAnswer', revealAnswer: false })
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
    this.setState({ button: 'nextCard',revealAnswer: true })
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

  render() {

    return (
        <div className="row card TeacherPresentMainCards">
          <div className="col s12 m12 l12 teacherPresentationCurrentCard">
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
                                <p key={i}>Lecture Ended </p>
                              )
                            } else if (this.state.revealAnswer) {
                              return (
                                <div key={i} className={Number(this.props.questionsList[0].correctAnswer) === i ? 'card blue teacherPresentRightAnswer z-depth-2' : 'card white teacherPresentWrongAnswer z-depth-0'} id={'choice_' + i}>
                                  <div className={Number(this.props.questionsList[0].correctAnswer) === i ? 'card-content white-text' : 'card-content black-text'}>
                                    {choice}
                                  </div>
                                </div>
                              )
                            } else {
                              return (
                                <div key={i} className="card blue" id={'choice_' + i}>
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
          <div className="col s12 m12 l12">
            <div className="card">
              <TeacherPresentCardPanel />
            </div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = ({ questionsList, socket, session }) => ({ questionsList, socket, session })
const mapDispatchToProps = {callRemoveQuestion, callReset, callOpenEndedReset, endSession };
const TeacherPresentMainCards = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentMainCardsComponent)

export default TeacherPresentMainCards;
