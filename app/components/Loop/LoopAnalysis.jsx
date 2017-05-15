import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Button } from 'react-materialize';
import { browserHistory } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import { Card, CardMedia, CardText } from 'material-ui/Card';
import { updateSession } from '../../reducers/session';
import { callClearStudentQuestions } from '../../reducers/studentQuestions';

class LoopAnalysis extends Component {
  constructor() {
    super();
    this.state = {
      sessionLength: '',
    };
    this.onReturnHome = this.onReturnHome.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let timeNow = moment();
    let lectureStart = moment(this.props.session.timeStarted);
    let duration = moment.duration(timeNow - lectureStart);
    let formattedTimeDuration = moment(duration.asMilliseconds()).format('mm:ss');
    this.setState({ sessionLength: formattedTimeDuration });
  }

  onReturnHome(e) {
    e.preventDefault();
    this.props.callClearStudentQuestions();
    this.props.updateSession({
      session_id: this.props.session.id,
      sessionLength: this.state.sessionLength,
    })
    .then(() => {
      browserHistory.push("/profile/previousLoops");
    });
  }

  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

    return (

        <div>
          <form className="post-loop-analysis">
            <h3 className="post-loop-analysis-heading">Well done!</h3>
            <Tabs>
              <Tab label="Statistics" >
              <Card>
                <CardText style={{ color: 'white', backgroundColor: 'teal', margin: '1em 0 1em 0', paddingBottom: '1em' }}>
                  Duration:
                  <h1>{this.state.sessionLength}</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>

              <Card style={{ border: '100em' }}>
                <CardText style={{ color: 'white', backgroundColor: 'maroon', margin: '1em 0 1em 0', paddingBottom: '1em' }}>
                  Total Questions Asked:
                  <h1>{this.props.studentQuestions.length}</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>

              <Card style={{ border: '100em' }}>
                <CardText style={{ color: 'white', backgroundColor: 'navy', margin: '1em 0 1em 0', paddingBottom: '1em' }}>
                  Answered Ratio:
                  <h1>{Math.round(this.props.answeredQuestions/this.props.studentQuestions.length * 100)}%</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>

              <Card style={{ border: '100em' }}>
                <CardText style={{ color: 'white', backgroundColor: 'blue', margin: '1em 0 1em 0', paddingBottom: '1em' }}>
                  Final Student Mood:
                  <h1>{this.props.studentMood}</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>
                <Button waves="light" className="#546e7a blue-grey darken-1 return-home-finish" onClick={this.onReturnHome}>
                  Return Home
                </Button>
              </Tab>
              <Tab label="Questions" >
                <div>
                  {
                    this.props.studentQuestions.map((question) => ((

                      <List>
                        <ListItem
                          leftAvatar={<Avatar src="img/user.jpg" />}
                          secondaryText={
                            <p>
                              <br/>
                              <span style={{ color: darkBlack }}>{question.content}</span>

                            </p>
                          }
                          secondaryTextLines={2}
                        />
                        <Divider inset={true} />
                      </List>
                    ))
                  )
                }
                </div>
              </Tab>
            </Tabs>
          </form>
        </div>
    );
  }
}

const mapStateToProps = ({ session, studentQuestions, studentMood, answeredQuestions }) => ({ session, studentQuestions, studentMood, answeredQuestions });
const mapDispatchToProps = { updateSession, callClearStudentQuestions };
const Loop = connect(mapStateToProps, mapDispatchToProps)(LoopAnalysis);

export default Loop;
