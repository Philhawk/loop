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
          <span className="card-title">
          Questions
          </span>
          <div>
            {
              this.props.studentQuestions.map((question, i) => (
                <p key={i} >{question.questionContent}</p>
                )
              )
            }
          </div>

      </div>
    );
  }
}


const mapStateToProps = ({ socket, studentQuestions }) => ({ socket, studentQuestions })
const mapDispatchToProps = { callStudentAddQuestion }
const TeacherPresentTabbedLeft = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentTabbedLeftComponent)

export default TeacherPresentTabbedLeft;

// To Bring Back SwipeableViews
        // <Tabs onChange={this.handleChange} value={this.state.slideIndex} >
        //   <Tab className="teacherPresentTabs" label="Questions" value={0} />
        // </Tabs>
        // <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} >
        // </SwipeableViews>
