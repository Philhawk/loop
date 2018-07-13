import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import uuid from 'uuid';
import { Card, CardActions, CardTitle, CardText } from '@material-ui/core/Card';
import { createActiveSession } from '../../reducers/session';
import { fetchAllQuestionsByLectureId, addQuestion } from '../../reducers/questionsList'
import { fetchLecture, deleteLecture } from '../../reducers/lecture';
import { fetchLecturesByTeacher, fetchAllLectures } from '../../reducers/lectureList';
import ContentAdd from '@material-ui/core/svg-icons/content/add';


const style = {
  marginRight: 20,
};

class PreviousLoopsComponent extends Component {
  constructor() {
    super();
  }

  onStartLoopClick(e) {
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
      if(this.props.auth.role === 'Admin') {
        this.props.fetchAllLectures()
      } else {
        this.props.fetchLecturesByTeacher({ id: this.props.auth.id })
      }
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
        <div className='create-new-loop-from-small-screen'>
           <Button variant="fab" containerElement={<Link to="/create-intro" />} style={style}>
             <ContentAdd />
           </Button>
       </div>
        {
          this.props.lectureList.map((lecture, i) => (
            <div className="col s12 m12 l6" key={i}>
              <Card>
                <CardTitle title={lecture.name} className="teacher-profile-loops"/>
                <CardText>
                  {lecture.description}
                </CardText>
                <CardActions>
                  <Button variant="flat" value={lecture.id} onClick={this.onStartLoopClick.bind(this, lecture.id)}>Start Loop</Button>
                  <Button variant="flat" value={lecture.id} onClick={this.onDeleteLoopClick.bind(this, lecture.id)}>Delete Loop</Button>
                  <Button variant="flat" value={lecture.id} onClick={this.onLoopStatsClick.bind(this, lecture.id)}>See Stats</Button>
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
const mapDispatchToProps = { createActiveSession, fetchAllQuestionsByLectureId, fetchLecture, addQuestion, deleteLecture, fetchLecturesByTeacher, fetchAllLectures }
const PreviousLoops = connect(mapStateToProps, mapDispatchToProps)(PreviousLoopsComponent)

export default PreviousLoops;
