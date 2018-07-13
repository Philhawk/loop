import React, { Component } from 'react';
import TeacherPresentTabbedLeft from './TeacherPresentTabbedLeft';
import TeacherPresentTabbedRight from './TeacherPresentTabbedRight';
import StudentMoodChart from './StudentMoodChart';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class TeacherPresentTabbedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'classQuestions'
    }
  }


  handleChange(value) {
    this.setState({
      value: value,
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
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Class Questions" value="classQuestions">
          <div>
            <h2 style={styles.headline}>Class Questions</h2>
              <TeacherPresentTabbedLeft />
          </div>
        </Tab>
        <Tab label="Student Answers" value="studentAnswers">
          <div>
            <h2 style={styles.headline}>Student Answers</h2>
              <TeacherPresentTabbedRight />
          </div>
        </Tab>
        <Tab label="Class Mood" value="classMood">
          <div>
            <h2 style={styles.headline}>Class Mood</h2>
             <StudentMoodChart />
          </div>
        </Tab>
      </Tabs>
    );
  }
}
