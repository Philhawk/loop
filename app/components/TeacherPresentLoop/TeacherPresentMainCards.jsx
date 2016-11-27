import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { callRemoveQuestion } from '../../reducers/questionsList';
import { callReset } from '../../reducers/data';
import { callOpenEndedReset} from '../../reducers/openEndedAnswers'
import { Button } from 'react-materialize';
import { callStudentAddMood } from '../../reducers/studentMood';

class TeacherPresentMainCardsComponent extends Component {
  constructor(props) {
      super(props);
      this.onCurrentCardRemove = this.onCurrentCardRemove.bind(this);
      this.props.socket.on('studentMoodIndex', ({mood}) => {
        this.props.callStudentAddMood({mood: mood})
    })
  };


  onCurrentCardRemove(){
    axios.put(`/api/sessions/${this.props.session.sessionString}/next`)
    .then((session) => {
      console.log("SESSIONDATA", session.data)
      this.props.socket.emit('teacherAsk', {question: this.props.questionsList[1], sessionString: this.props.session.sessionString})
      this.props.callRemoveQuestion();
      this.props.callReset();
      this.props.callOpenEndedReset();
    })
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

             <Button waves='light' className="#0091ea light-blue accent-4" onClick={this.onCurrentCardRemove}>Next Card</Button>
              </div>

            </div>
          </div>
          <div className="col s12 m4 l4 teacherPresentationNextCard">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">Current Mood
                  <div>
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
