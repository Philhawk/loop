import React, { Component } from 'react';
import { Button }  from 'react-materialize';
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
    this.onStartLoopClick = this.onStartLoopClick.bind(this);
    this.onDeleteLoopClick = this.onDeleteLoopClick.bind(this);
    this.onLoopStatsClick = this.onLoopStatsClick.bind(this);
  }

  onStartLoopClick(e) {
    console.log("EEEEE", e.target.value)
    this.props.fetchAllQuestionsByLectureId({ lecture_id: e.target.value })
    this.props.fetchLecture({ lecture_id: e.target.value})
    this.props.createActiveSession({sessionString: uuid(), lecture_id: e.target.value })
    .then(() => {
      browserHistory.push(`/loop/${this.props.session.sessionString}`)
    })
  }

  onDeleteLoopClick(e) {
    this.props.deleteLecture({ lecture_id: e.target.value })
    .then(() => {
      this.props.fetchLecturesByTeacher({ id: this.props.auth.id })
    })
  }

  onLoopStatsClick(e) {
    e.preventDefault()
    this.props.fetchLecture({ lecture_id: e.target.value })
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
                  <div className="row">
                    <Button value={lecture.id} onClick={this.onStartLoopClick}>Start Loop</Button>
                    <Button value={lecture.id} onClick={this.onDeleteLoopClick}>Delete Loop</Button>
                  </div>
                  <div className="row loop-stats">
                    <Button value={lecture.id} onClick={this.onLoopStatsClick}>See Stats</Button>
                  </div>
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
