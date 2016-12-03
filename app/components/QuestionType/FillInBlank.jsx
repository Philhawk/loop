import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { createQuestion } from 'APP/app/reducers/questionsList';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import injectTapEventPlugin from "react-tap-event-plugin";

class FillInBlankComponent extends Component {
  constructor() {
    super();
    this.onQuestionCreate = this.onQuestionCreate.bind(this);
    this.onRadioSelect = this.onRadioSelect.bind(this);
    this.state = {
      questions: [],
      selectedAnswer: null
    }
  }

    onQuestionCreate(e) {
      e.preventDefault()
      this.props.createQuestion({
        content: e.target.question.value,
        correctAnswer: this.state.selectedAnswer,
        questionType: 'fillInTheBlank', // remember to input the correct question type
        choices: [e.target.answer_A.value, e.target.answer_B.value, e.target.answer_C.value, e.target.answer_D.value],
        lecture_id: this.props.lecture.id
      })
      // resets all form fields on submit
      e.target.question.value = "";
      e.target.answer_A.value = "";
      e.target.answer_B.value = "";
      e.target.answer_C.value = "";
      e.target.answer_D.value = "";
      // need to figure out how to deselect radio buttons.
    }

    onRadioSelect(e) {
      this.setState({
        selectedAnswer: e.target.value,
        open: false
      })
    }

    handleTouchTap = () => {
      this.setState({
        open: true
      });
    };

    handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };

  render() {
    return (
      <div className="card-content">

        <form className="form-signin" onSubmit={this.onQuestionCreate}>
          <h3 className="form-signin-heading">Fill in the blank.</h3>
          <div className="input-field col s12">
            <input id="question" name="question" type="text"/>
            <label htmlFor="question">Question</label>
          </div>
          <div className="input-field col s12">
            <input name="answer_A" type="text"/>
            <label htmlFor="answer_A">A</label>
          </div>
          <div className="input-field col s12">
            <input name="answer_B" type="text"/>
            <label htmlFor="answer_B">B</label>
          </div>
          <div className="input-field col s12">
            <input name="answer_C" type="text"/>
            <label htmlFor="answer_C">C</label>
          </div>
          <div className="input-field col s12">
            <input name="answer_D" type="text"/>
            <label htmlFor="answer_D">D</label>
          </div>
          <div className="radioSelects">
            <p className="p-tag-pad-bot">Correct Answer</p>
            <Input name='correct' type='radio' value='0' label='A' className='with-gap' onClick={this.onRadioSelect}/>
            <Input name='correct' type='radio' value='1' label='B' className='with-gap' onClick={this.onRadioSelect}/>
            <Input name='correct' type='radio' value='2' label='C' className='with-gap' onClick={this.onRadioSelect}/>
            <Input name='correct' type='radio' value='3' label='D' className='with-gap' onClick={this.onRadioSelect}/>
            <Button className='#0d47a1 blue darken-4 button-pad' waves='light' onTouchTap={this.handleTouchTap}>Save question</Button>
            <Snackbar
              open={this.state.open}
              message="Card Created"
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
          </div>
        </form>

      </div>
    )
  }
}


const mapDispatchToProps = {createQuestion}
const mapStateToProps = ({ lecture }) => ({ lecture })
const FillInBlank = connect(mapStateToProps, mapDispatchToProps)(FillInBlankComponent)

export default FillInBlank;
