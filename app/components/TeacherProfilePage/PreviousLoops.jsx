import React, { Component } from 'react';
import { Button }  from 'react-materialize';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import uuid from 'uuid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { createActiveSession } from '../../reducers/session';
import { fetchAllQuestionsByLectureId, addQuestion } from '../../reducers/questionsList'
import { fetchLecture } from '../../reducers/lecture';



class PreviousLoopsComponent extends Component {
  constructor() {
    super();
    this.onStartLoopClick = this.onStartLoopClick.bind(this);
  }

  onStartLoopClick(e) {
    this.props.fetchAllQuestionsByLectureId({ lecture_id: e.target.value })
    this.props.fetchLecture(e.target.value)
    this.props.createActiveSession({sessionString: uuid(), lecture_id: e.target.value })
    .then(() => {
      browserHistory.push(`/loop/${this.props.session.sessionString}`)
    })
  }

  render() {
    return (
      <div>
        {
          this.props.lectureList.map((lecture, i) => (
            <div className="col s6" key={i}>
              <Card>
                <CardTitle title={lecture.name} className="teacher-profile-loops"/>
                <CardText>
                  {lecture.description}
                </CardText>
                <CardActions>
                  <Button value={lecture.id} onClick={this.onStartLoopClick}>Start Loop</Button>
                  <Button>Loop Stats</Button>
                </CardActions>
              </Card>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ lectureList, session }) => ({ lectureList, session });
const mapDispatchToProps = { createActiveSession, fetchAllQuestionsByLectureId, fetchLecture, addQuestion }
const PreviousLoops = connect(mapStateToProps, mapDispatchToProps)(PreviousLoopsComponent)

export default PreviousLoops;
