import React, { Component } from 'react';
import TeacherPresentTabbedLeft from './TeacherPresentTabbedLeft';
import TeacherPresentTabbedRight from './TeacherPresentTabbedRight';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class TeacherPresentTabbedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'questions',
    }
  }


  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

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
        <Tab label="Questions" value="questions">
          <div>
            <h2 style={styles.headline}>Questions</h2>
              <TeacherPresentTabbedLeft />
          </div>
        </Tab>
        <Tab label="Data" value="data">
          <div>
            <h2 style={styles.headline}>Data</h2>
              <TeacherPresentTabbedRight />
          </div>
        </Tab>
        <Tab label="Mood" value="mood">
          <div>
            <h2 style={styles.headline}>Mood</h2>
              <TeacherPresentTabbedRight />
          </div>
        </Tab>
      </Tabs>
    );
  }
}
