import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardMedia, CardText } from 'material-ui/Card';

class LoopStudentAnalysisComponent extends Component {
  constructor() {
    super();
  }

  render() {
    let timeNow = moment();
    let lectureStart = moment(this.props.session.timeStarted)
    let duration = moment.duration(timeNow - lectureStart)
    let formattedTimeDuration = moment(duration.asMilliseconds()).format('mm:ss')

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
              </Tab>
              <Tab label="Placeholder" >
              </Tab>
            </Tabs>
          </form>
        </div>

    );
  }
}

const mapStateToProps = ({ session }) => ({ session })
const LoopStudentAnalysis = connect(mapStateToProps)(LoopStudentAnalysisComponent)

export default LoopStudentAnalysis;
