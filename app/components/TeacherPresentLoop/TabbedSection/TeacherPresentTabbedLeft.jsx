import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { callStudentAddQuestion } from '../../../reducers/studentQuestions';
import store from '../../../store';

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

class TeacherPresentTabbedLeftComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.props.socket.on('newStudentQuestion', ({ question }) => {
      this.props.callStudentAddQuestion({questionContent: question, answered: false})
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
          <Tab className="teacherPresentTabs" label="Questions" value={0} />
          <Tab className="teacherPresentTabs" label="Dashboards" value={1} />
          <Tab className="teacherPresentTabs" label="Live Chat" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            {
              this.props.studentQuestions.map(question => (
                <p>{question.questionContent}</p>
                )
              )
            }
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}


const mapStateToProps = ({ socket, studentQuestions }) => ({ socket, studentQuestions })
const mapDispatchToProps = { callStudentAddQuestion }
const TeacherPresentTabbedLeft = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentTabbedLeftComponent)

export default TeacherPresentTabbedLeft;
