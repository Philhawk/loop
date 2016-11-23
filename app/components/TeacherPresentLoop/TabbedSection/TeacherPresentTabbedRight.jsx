import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { callStudentAddMood } from '../../../reducers/studentMood';
import { connect } from 'react-redux';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class TeacherPresentTabbedRightComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };

    this.props.socket.on('studentMoodIndex', ({mood}) => {
      this.props.callStudentAddMood({mood: mood})
    })
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="card">
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab className="teacherPresentTabs" label="Data" value={0} />
          <Tab className="teacherPresentTabs" label="Mood" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            slide n°1
          </div>
          <div id="chart-graph" style={styles.slide}>
            {
              this.props.studentMood
            }
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = ({socket, studentMood}) => ({socket, studentMood})
const mapDispatchToProps = { callStudentAddMood }
const TeacherPresentTabbedRight = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentTabbedRightComponent)

export default TeacherPresentTabbedRight;
