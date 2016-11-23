import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callRemoveQuestion } from '../../reducers/questionsList';
import { Button } from 'react-materialize';

class TeacherPresentMainCardsComponent extends Component {
  constructor() {
    super();
    this.onCurrentCardRemove = this.onCurrentCardRemove.bind(this);
  }

  onCurrentCardRemove(){
    this.props.callRemoveQuestion();
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
                </span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = ({ questionsList }) => ({ questionsList })
const mapDispatchToProps = { callRemoveQuestion };
const TeacherPresentMainCards = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentMainCardsComponent)

export default TeacherPresentMainCards;

