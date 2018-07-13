import React from 'react';
import {Tabs, Tab} from '@material-ui/core/Tabs';
import { connect } from 'react-redux';
import { callStudentSelectA, callStudentSelectB, callStudentSelectC, callStudentSelectD, postResponse } from '../../../reducers/data';
import { callAddAnswer } from '../../../reducers/openEndedAnswers'
import MultipleChoiceData from './MultipleChoiceData';
import OpenEndedData from './OpenEndedData';


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

    this.props.socket.on('studentMultipleChoiceAnswer', ({answer}) => {
      this.props.postResponse({ userResponse: answer, question_id: this.props.questionsList[0].id })
      if(answer === 0) this.props.callStudentSelectA()
      else if(answer === 1) this.props.callStudentSelectB()
      else if(answer === 2) this.props.callStudentSelectC()
      else if(answer === 3) this.props.callStudentSelectD()
    })

    this.props.socket.on('studentOpenEndedAnswer', ({ answer }) => {
      this.props.postResponse({ userResponse: answer, question_id: this.props.questionsList[0].id })
      this.props.callAddAnswer(answer);
    })

  }


  displayData() {
    if(!this.props.questionsList[0]) return <p>No More Questions!</p>
    if(this.props.questionsList[0].questionType === 'multipleChoice') {
      return <MultipleChoiceData data={this.props.data}/>
    } else if(this.props.questionsList[0].questionType === 'openEnded') {
      return <OpenEndedData openEndedAnswers={this.props.openEndedAnswers}/>
    } else if(this.props.questionsList[0].questionType === 'fillInTheBlank') {
      return <MultipleChoiceData data={this.props.data}/>
    }
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  render() {
    return (
      <div className="card" id="container">
          {this.displayData()}
      </div>
    );
  }
}

const mapStateToProps = ({socket, data, questionsList, openEndedAnswers }) => ({socket, data, questionsList, openEndedAnswers })
const mapDispatchToProps = { callStudentSelectA, callStudentSelectB, callStudentSelectC, callStudentSelectD, callAddAnswer, postResponse }
const TeacherPresentTabbedRight = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentTabbedRightComponent)

export default TeacherPresentTabbedRight;
