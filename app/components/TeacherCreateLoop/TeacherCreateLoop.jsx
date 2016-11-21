import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize';
import { Link } from 'react-router';
import FillInBlank from '../QuestionType/FillInBlank';
import MultipleChoice from '../QuestionType/MultipleChoice';
import OpenEnded from '../QuestionType/OpenEnded';
import { createLecture, updateLecture } from '../../reducers/lecture';
import { createSession } from '../../reducers/session';
import { connect } from 'react-redux';
import uuid from 'uuid';


class TeacherCreateLoopComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this.onFillInBlank = this.onFillInBlank.bind(this);
    this.onMultipleChoice = this.onMultipleChoice.bind(this);
    this.onOpenEnded = this.onOpenEnded.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
    this.props.createLecture({
      name: '',
      mood: 0,
      timeStarted: null,
      teacher_id: this.props.auth.id
    }).then(
      () => this.props.createSession({sessionString: uuid(), lecture_id: this.props.lecture.id})
    )

  }

  onFillInBlank(e) {
    e.preventDefault()
    this.setState({whois: "fillInBlank"})
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
                <div className="card white-grey darken-1 cardCreation">
                  <div className="card-content black-text">
                    {this.showQuestion()}
                  </div>
                </div>
              </div>

              <div className="col s12 m12 l4" id="questionOption">
                <div className="card white-grey darken-1">
                  <div className="card-content black-text">
                    <span className="card-title">Fill in the blank</span>
                    <p>Your teachers name is ___________.</p>
                  </div>
                  <div className="card-action">
                    <a href="" onClick={this.onFillInBlank}>Create Question</a>
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
                    <a href="" onClick={this.onMultipleChoice}>Create Question</a>
                  </div>
                </div>

                <div className="card white-grey darken-1">
                  <div className="card-content black-text">
                    <span className="card-title">Open Ended</span>
                    <p>160 characters or less please.</p>
                  </div>
                  <div className="card-action">
                    <a href="" onClick={this.onOpenEnded}>Create Question</a>
                  </div>
                </div>
              </div>

              <div className="col s12 m12 l2" id="Sidebar">
                <div className="card #37474f white-grey darken-3">
                  <div className="card-content black-text">
                    <span className="card-title">User Name</span>
                  </div>
                </div>
                {
                  this.props.questionsList.map(question => (
                    <div className="card #37474f white-grey darken-3">
                      <div className="card-content black-text">
                        <p>{question.content}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
          </div>
    );
  }
}

const mapStateToProps = ({ auth, lecture, session, questionsList }) => ({ auth, lecture, session, questionsList })
const mapDispatchToProps = { createSession, createLecture ,updateLecture }
const TeacherCreateLoop = connect(mapStateToProps, mapDispatchToProps)(TeacherCreateLoopComponent)

export default TeacherCreateLoop;
