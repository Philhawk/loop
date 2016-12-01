import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { Button }  from 'react-materialize';
import { Link } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';

class LoopAnalysis extends Component {
  constructor() {
    super();
  }


  render() {
    let timeNow = moment();
    let lectureStart = moment(this.props.session.timeStarted)
    let duration = moment.duration(timeNow - lectureStart)
    let formattedTimeDuration = moment(duration.asMilliseconds()).format('mm:ss')

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
                <CardText style={{color: 'white', backgroundColor: 'teal', margin: '1em 0 1em 0', paddingBottom: '1em'}}>
                  Duration:
                  <h1>{formattedTimeDuration}</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>

              <Card style={{border: '100em'}}>
                <CardText style={{color: 'white', backgroundColor: 'maroon', margin: '1em 0 1em 0', paddingBottom: '1em'}}>
                  Total Questions Asked:
                  <h1>{this.props.studentQuestions.length}</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>

              <Card style={{border: '100em'}}>
                <CardText style={{color: 'white', backgroundColor: 'navy', margin: '1em 0 1em 0', paddingBottom: '1em'}}>
                  Answered Ratio:
                  <h1>{Math.round(this.props.answeredQuestions/this.props.studentQuestions.length * 100)}%</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>

              <Card style={{border: '100em'}}>
                <CardText style={{color: 'white', backgroundColor: 'blue', margin: '1em 0 1em 0', paddingBottom: '1em'}}>
                  Final Student Mood:
                  <h1>{this.props.studentMood}</h1>
                </CardText>
                <CardMedia></CardMedia>
              </Card>
              <Link to="/profile/previousLoops" className="white-text">
                <Button waves='light' className="#4E546C darken-2 return-home-finish">
                  Return Home
                </Button>
              </Link>
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
                              <span style={{color: darkBlack}}>{question.content}</span>

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

const mapStateToProps = ({ session, studentQuestions, studentMood, answeredQuestions}) => ({ session, studentQuestions, studentMood, answeredQuestions })
const Loop = connect(mapStateToProps)(LoopAnalysis)

export default Loop;
