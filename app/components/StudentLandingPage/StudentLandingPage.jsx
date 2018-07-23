import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
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
          <CardMedia
            title="No Classes Glasses"
            src="/class.jpg"

          />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Class is out!
          </Typography>
          <Typography component="p">
            There are no active Loops in progress. Come back later.
          </Typography>
        </CardContent>
          <CardActions>
            <Button variant="flat" href='/'>
              Return Home
            </Button>
          </CardActions>
        </Card>
      </div>
    );
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
