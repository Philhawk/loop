import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize';
import { Link } from 'react-router';
import FillInBlank from '../QuestionType/FillInBlank';
import MultipleChoice from '../QuestionType/MultipleChoice';
import OpenEnded from '../QuestionType/OpenEnded';
import { createLecture } from '../../reducers/lecture';
import { createSession, updateSessionTime } from '../../reducers/session';
import { connect } from 'react-redux';
import uuid from 'uuid';
import axios from 'axios';


class TeacherCreateLoopComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this.onFillInBlank = this.onFillInBlank.bind(this);
    this.onMultipleChoice = this.onMultipleChoice.bind(this);
    this.onOpenEnded = this.onOpenEnded.bind(this);
  }

  componentDidMount() {
  $('.lean-overlay').remove()
    document.body.style = "";

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
    this.props.updateSessionTime({ session_id: this.props.session.id })
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


  showQuestion() {
    if (this.state.whois === "fillInBlank") {
      return <FillInBlank />
    } else if (this.state.whois === "multipleChoice") {
      return <MultipleChoice />
    } else if (this.state.whois === "openEnded")
      return <OpenEnded />
  }

  render() {
    return (

        <div className="row backgroundCard teacher-text">
          <div className="col s12 m12 l12 card">

              <div className="col s12 m12 l6" id="questionCreation">
              <Link to={`/loop/${this.props.session.sessionString}`}>
                <Button waves='light' id="startPresBtn">Start Presentation</Button>
              </Link>
                <div className="card-panel">
                  {this.showQuestion()}
                </div>
              </div>

              <div className="col s12 m12 l3" id="questionOption">
                <div className="card white-grey darken-1">
                  <div className="card-content black-text">
                    <span className="card-title">Fill in the blank</span>
                    <p>The teacher's name is ___________.</p>
                  </div>
                  <div className="card-action">
                    <Button className="createBtn" onClick={this.onFillInBlank}>Create Question</Button>
                  </div>
                </div>

                <div className="card white-grey darken-1">
                  <div className="card-content black-text">
                    <span className="card-title">Multiple Choice</span>
                    <h6>Who is the 44th President of the United States</h6>
                    <p>A. Barack Obama</p>
                    <p>B. Abraham Lincoln</p>
                    <p>C. George Bush</p>
                  </div>
                  <div className="card-action">
                    <Button className="createBtn" onClick={this.onMultipleChoice}>Create Question</Button>
                  </div>
                </div>

                <div className="card white-grey darken-1">
                  <div className="card-content black-text">
                    <span className="card-title">Open Ended</span>
                    <p>160 characters or less please.</p>
                  </div>
                  <div className="card-action">
                    <Button className="createBtn" onClick={this.onOpenEnded}>Create Question</Button>
                  </div>
                </div>
              </div>

              <div className="col s12 m12 l3">
                <div className="card #37474f white-grey darken-3">
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
                          <p>{question.content}</p>
                        </div>
                      </div>
                    )
                    }
                  })
                }
              </div>

            </div>
          </div>
    );
  }
}

const mapStateToProps = ({ auth, lecture, session, questionsList }) => ({ auth, lecture, session, questionsList })

const mapDispatchToProps = { createSession, createLecture , updateSessionTime }
const TeacherCreateLoop = connect(mapStateToProps, mapDispatchToProps)(TeacherCreateLoopComponent)

export default TeacherCreateLoop;
