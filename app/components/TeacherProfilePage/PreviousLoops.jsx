import React, { Component } from 'react';
import { Button }  from 'react-materialize';
import FlatButton from 'material-ui/FlatButton';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import uuid from 'uuid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { createActiveSession } from '../../reducers/session';
import { fetchAllQuestionsByLectureId, addQuestion } from '../../reducers/questionsList'
import { fetchLecture, deleteLecture } from '../../reducers/lecture';
import { fetchLecturesByTeacher } from '../../reducers/lectureList';




class PreviousLoopsComponent extends Component {
  constructor() {
    super();
  }

  onStartLoopClick(e) {
    console.log("EEEEE", e)
    this.props.fetchAllQuestionsByLectureId({ lecture_id: e })
    this.props.fetchLecture({ lecture_id: e})
    this.props.createActiveSession({sessionString: uuid(), lecture_id: e})
    .then(() => {
      browserHistory.push(`/loop/${this.props.session.sessionString}`)
    })
  }

  onDeleteLoopClick(e) {
    this.props.deleteLecture({ lecture_id: e})
    .then(() => {
      this.props.fetchLecturesByTeacher({ id: this.props.auth.id })
    })
  }

  onLoopStatsClick(e) {
    this.props.fetchLecture({ lecture_id: e })
    .then(() => {
      browserHistory.push(`loopStats`)
    })
  }

  render() {
    return (
      <div id="previous-loops">
        {
          this.props.lectureList.map((lecture, i) => (
            <div className="col s12 m12 l6" key={i}>
              <Card>
                <CardTitle title={lecture.name} className="teacher-profile-loops"/>
                <CardText>
                  {lecture.description}
                </CardText>
                <CardActions>
                  <FlatButton value={lecture.id} onClick={this.onStartLoopClick.bind(this, lecture.id)}>Start Loop</FlatButton>
                  <FlatButton value={lecture.id} onClick={this.onDeleteLoopClick.bind(this, lecture.id)}>Delete Loop</FlatButton>
                  <FlatButton value={lecture.id} onClick={this.onLoopStatsClick.bind(this, lecture.id)}>See Stats</FlatButton>
                </CardActions>
              </Card>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ lectureList, session, auth }) => ({ lectureList, session, auth });
const mapDispatchToProps = { createActiveSession, fetchAllQuestionsByLectureId, fetchLecture, addQuestion, deleteLecture, fetchLecturesByTeacher }
const PreviousLoops = connect(mapStateToProps, mapDispatchToProps)(PreviousLoopsComponent)

export default PreviousLoops;
