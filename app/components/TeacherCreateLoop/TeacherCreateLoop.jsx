import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize';
import { Link } from 'react-router';
import QuestionInstructions from '../QuestionType/QuestionInstructions';
import FillInBlank from '../QuestionType/FillInBlank';
import MultipleChoice from '../QuestionType/MultipleChoice';
import Dialog from 'material-ui/Dialog';
import OpenEnded from '../QuestionType/OpenEnded';
import { createLecture, updateLecture } from '../../reducers/lecture';
import { createSession, activateSession } from '../../reducers/session';
import { connect } from 'react-redux';
import NameLoopPanel from '../NameLoopPanel'
import uuid from 'uuid';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class TeacherCreateLoopComponent extends Component {
  constructor() {
    super();
    this.state = {
      whois: "QuestionInstructions",
      open: true,
    };
    this.onFillInBlank = this.onFillInBlank.bind(this);
    this.onMultipleChoice = this.onMultipleChoice.bind(this);
    this.onOpenEnded = this.onOpenEnded.bind(this);
    this.onNameLoop = this.onNameLoop.bind(this);
  }

  handleClose(){
    this.setState({open: false});
  };

  componentDidMount() {
    this.props.createLecture({
      name: '',
      mood: 0,
      timeStarted: null,
      teacher_id: this.props.auth.id
    }).then(
      () => this.props.createSession({sessionString: uuid(), lecture_id: this.props.lecture.id})
    )
  }

  componentWillUnmount() {
    this.props.activateSession({ session_id: this.props.session.id })
  }

  onNameLoop(e) {
    e.preventDefault();
    this.handleClose()
    this.props.updateLecture({ name: e.target.loopName.value, description: e.target.loopDescription.value, lecture_id: this.props.lecture.id })
  }

  onFillInBlank(e) {
    e.preventDefault()
    this.setState({whois: "fillInBlank"})
    e.target.fill
  }

  onMultipleChoice(e) {
    e.preventDefault()
    this.setState({whois: "multipleChoice"})
  }

  onOpenEnded(e) {
    e.preventDefault()
    this.setState({whois: "openEnded"})
  }

  // displays the question component that matches the state change
  showQuestion() {
    if (this.state.whois === "fillInBlank") {
      return <FillInBlank />
    }
    else if (this.state.whois === "multipleChoice") {
      return <MultipleChoice />
    }
    else if (this.state.whois === "openEnded") {
      return <OpenEnded />
    }
    else if (this.state.whois === "QuestionInstructions") {
      return <QuestionInstructions />
    }
  }


  render() {

    return (

        <div className="row backgroundCard teacher-text">
          <div className={`col s12 m12 l12 card ${ this.state.whois === 'QuestionInstructions' ? 'create-loop' : ''}`}>

              <div className="col s12 m12 l6" id="questionCreation">
                <Link to={`/loop/${this.props.session.sessionString}`}>
                  <Button waves='light' id="startPresBtn">Start Presentation</Button>
                </Link>

                <div className={`card-panel z-depth-3 card-bottom-pad ${this.state.whois === 'QuestionInstructions' ? 'intro-card' : ''}`}>

                  {this.showQuestion()}
                </div>
              </div>


              <div className="col s12 m12 l3" id="questionOption">
                <div className="card white-grey z-depth-3">
                  <div className="card-content black-text">
                    <span className="card-title">Fill in the blank</span>
                  </div>
                  <div className="card-action">
                    <Button waves='light' className="createBtn" onClick={this.onFillInBlank}>Create</Button>
                  </div>
                </div>

                <div className="card white-grey z-depth-3">
                  <div className="card-content black-text">
                    <span className="card-title">Multiple Choice</span>
                  </div>
                  <div className="card-action">
                    <Button waves='light' className=" createBtn" onClick={this.onMultipleChoice}>Create</Button>
                  </div>
                </div>

                <div className="card white-grey z-depth-3">
                  <div className="card-content black-text">
                    <span className="card-title">Open Ended</span>
                  </div>
                  <div className="card-action">
                    <Button waves='light' className="createBtn" onClick={this.onOpenEnded}>Create</Button>
                  </div>
                </div>
              </div>

              <div className="col s12 m12 l3">
                <div className="card #37474f white-grey z-depth-3">
                  <div className="card-content black-text">
                    <span className="card-title">{this.props.auth && this.props.auth.name || 'NotLoggedInFail'}</span>
                  </div>
                </div>
                {
                  this.props.questionsList.map((question, i) => {
                    if(question.content === '') return null
                    else {
                      return (
                      <div className="card #37474f white-grey darken-3" key={i}>
                        <div className="card-content black-text">
                          <p className='question-content-side-nav'>{question.content}</p>
                        </div>
                      </div>
                    )
                    }
                  })
                }
              </div>
              <Dialog
                modal={true}
                open={this.state.open}
              >
              <form onSubmit={this.onNameLoop}>
                <div className="input-field inline card-content">
                  <img src="/logo.png"></img>
                  <h2 className='welcome-modal'> Let's get started </h2>
                  <span className="card-title name-loop-font">Name Your Loop</span>
                  <br/>
                  <input id="loop-name" name="loopName" type="text" />
                  <span className="card-title name-loop-font">Describe Your Loop</span>
                  <textarea id="loop-description" name="loopDescription" className="materialize-textarea"></textarea>
                </div>
                <div className="card-action">
                  <Button className="createBtnBox">Create Loop</Button>
                </div>
              </form>
              </Dialog>
            </div>
          </div>
    );
  }
}

const mapStateToProps = ({ auth, lecture, session, questionsList }) => ({ auth, lecture, session, questionsList })

const mapDispatchToProps = { createSession, createLecture , activateSession, updateLecture }
const TeacherCreateLoop = connect(mapStateToProps, mapDispatchToProps)(TeacherCreateLoopComponent)

export default TeacherCreateLoop;
