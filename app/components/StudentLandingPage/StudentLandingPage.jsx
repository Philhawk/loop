import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardMedia, CardTitle, CardText } from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import moment from 'moment';

class StudentLandingPageComponent extends Component {
  activeSessions() {
    return (
      <div className="container">
        { console.log('THIS IS THE ACTIVE SESSIONS', this.props.activeSessions[0]) }
        { this.props.activeSessions.map(session => (
          <Card className="card-wot">
            <CardMedia overlay={<CardTitle title={session.lecture.name} subtitle={session.lecture.teacher.name} />}>
              <img src="https://source.unsplash.com/random/520x66" />
            </CardMedia>
            <CardTitle />
            <CardText>
              {session.lecture.description}
            </CardText>
            <CardActions>
              <Button variant="flat" label="Join Loop" href={session.bitly} />
              <Button variant="flat" label={`Started ${moment(session.timeStarted).from(moment(new Date()))}`} />
            </CardActions>
          </Card>
          ))
        }
      </div>
    );
  }


  noActiveSessions() {
    return (
      <div className="container">
        <Card className="card-wot">
          <CardMedia overlay={
            <CardTitle title="Class is out!" subtitle="There are no active Loops in progress. Come back later" />
          }>
            <img src="/class.jpg" />
          </CardMedia>
          <CardTitle />
          <CardActions>
            <Button variant="flat" label="Return Home" href='/'> </Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.activeSessions.length === 0 ? this.noActiveSessions() : this.activeSessions()}
      </div>
    )
  }
}

const mapStateToProps = ({ activeSessions }) => ({ activeSessions });
const StudentLandingPage = connect(mapStateToProps)(StudentLandingPageComponent);

export default StudentLandingPage;
