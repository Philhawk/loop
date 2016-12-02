import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-materialize';
import OpenEnded from '../QuestionType/OpenEnded';
import MultipleChoice from '../QuestionType/MultipleChoice';
import FillInBlank from '../QuestionType/FillInBlank';
import uuid from 'uuid';

import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { createLecture, updateLecture } from '../../reducers/lecture';
import { createSession, activateSession } from '../../reducers/session';
import QuestionInstructions from '../QuestionType/QuestionInstructions';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class TeacherCreateLoopComponent extends Component {
  constructor() {
    super();
    this.state = {
      whois: '',
      finished: false,
      stepIndex: 0,
    };
    this.onFillInBlank = this.onFillInBlank.bind(this);
    this.onMultipleChoice = this.onMultipleChoice.bind(this);
    this.onOpenEnded = this.onOpenEnded.bind(this);
    this.onFillInBlankNext = this.onFillInBlankNext.bind(this);
    this.onMultipleChoiceNext = this.onMultipleChoiceNext.bind(this);
    this.onOpenEndedNext = this.onOpenEndedNext.bind(this);
    this.handleFirstContinue = this.handleFirstContinue.bind(this);

  }

  componentDidMount() {
    this.props.createLecture({
      name: 'something',
      mood: 0,
      timeStarted: null,
      teacher_id: this.props.auth.id
    }).then(
      () => this.props.createSession({sessionString: uuid(), lecture_id: this.props.lecture.id})
    )
  }

  componentWillUnmount() {
    this.props.activateSession({ session_id: this.props.session.id })
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handleFirstContinue(e){
    e.preventDefault()

    const {stepIndex} = this.state;

    this.props.updateLecture(
      { name: e.target.loopName.value,
        description: e.target.loopDescription.value,
        lecture_id: this.props.lecture.id
      })

    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  onFillInBlank(e) {
    const {stepIndex} = this.state;
    this.setState({
      whois: "fillInBlank",
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });

    e.preventDefault()
    e.target.fill
  }

  onFillInBlankNext(e) {
    e.preventDefault()

    this.setState({
      whois: "fillInBlank",
    });

    e.target.fill
  }

  onMultipleChoice(e) {
    const {stepIndex} = this.state;
    this.setState({
      whois: "multipleChoice",
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });

    e.preventDefault()
    e.target.fill
  }

  onMultipleChoiceNext(e) {
    e.preventDefault()

    this.setState({
      whois: "multipleChoice",
    });

  }



  onOpenEnded(e) {
    const {stepIndex} = this.state;
    this.setState({
      whois: "openEnded",
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });

    e.preventDefault()
    e.target.fill
  }

  onOpenEndedNext(e) {
    e.preventDefault()
    this.setState({
      whois: "openEnded",
    });
  }

  showQuestion() {
    if (this.state.whois === "fillInBlank") {
      return <FillInBlank />
    }
    else if (this.state.whois === "multipleChoice") {
      return <MultipleChoice />
    }
    else if (this.state.whois === "openEnded") {
      return <OpenEnded />
    }
    else if (this.state.whois === "QuestionInstructions") {
      return <QuestionInstructions />
    }
  }

    getStepContent(stepIndex) {
     switch (stepIndex) {
       case 0:
         return (
           <div className="row backgroundCard">
             <div className='col s6 m6 l6'>
               <QuestionInstructions />
               <form onSubmit={this.handleFirstContinue} >
                   <span className="name-loop-font">Name Your Loop</span>
                   <br/>
                   <input id="loop-name" name="loopName" type="text" />
                   <span className="name-loop-font">Describe Your Loop</span>
                   <textarea id="loop-description" name="loopDescription" className="materialize-textarea"></textarea>
                  <Button className="createBtn">Continue</Button>
               </form>
             </div>
             <div className='col s6 m6 l6'>
                <img className="createloopimage" src="/createloop.png" />

             </div>
           </div>
         )
       case 1:
         return (
           <div className="row backgroundCard">

             <div className='col s12 m12 l12'>
             <h4 className='header-text-for-instructions'> Challenge your students</h4>
             <div className="instruction-text">
               <p> With a range of question types available , Loops are intended to provide you with the best tools to increase the learning potential   of your student.</p>
               <p> Once you pick a questiion type, you'll be able to able to customize it with the question and answers that you want.</p>

               <div className='button-questions-pad'>
                <div className='col s4 m4 l4'>
                  <Button className="createBtn" onTouchTap={this.onFillInBlank}>Fill in the blank</Button>
                </div>

                <div className='col s4 m4 l4'>
                  <Button className="createBtn" onTouchTap={this.onMultipleChoice}>Multiple Choice</Button>
                </div>
                <div className='col s4 m4 l4'>
                  <Button className="createBtn" onTouchTap={this.onOpenEnded}>Open Ended</Button>
                </div>
                </div>
             </div>
                <img className="createloopimage" src="/createquestions.png" />
             </div>
           </div>
         )
       case 2:
         return (
           <div className="row backgroundCard">

            <div className='row'>
              <div className='col s12 m12 l12'>
                 <div className='col s6 m6 l6'>
                    <Link to={`/profile/previousLoops`}>
                      <RaisedButton
                        label={'Save Presentation for later'}
                        primary={true}
                      />
                    </Link>
                  </div>
                  <div className='col s6 m6 l6'>
                    <Link to={`/loop/${this.props.session.sessionString}`}>
                      <RaisedButton
                        label={'Start Presentation'}
                        disabled={ this.props.questionsList.length === 1 ? true : false }
                        primary={true}
                      />
                    </Link>
                   </div>
              </div>
            </div>
             <div className='col s6 m6 l6'>
               <div className="col s12 m12 l12" id="questionOption">
                 <div className="card white-grey">
                   <div className="card-content black-text">
                     <span className="card-title">Fill in the blank</span>
                   </div>
                   <div className="card-action">
                     <Button className="createBtn" onTouchTap={this.onFillInBlankNext}>Create</Button>
                   </div>
                 </div>

                 <div className="card white-grey">
                   <div className="card-content black-text">
                     <span className="card-title">Multiple Choice</span>
                   </div>
                   <div className="card-action">
                     <Button className="createBtn" onTouchTap={this.onMultipleChoiceNext}>Create</Button>
                   </div>
                 </div>

                 <div className="card white-grey">
                   <div className="card-content black-text">
                     <span className="card-title">Open Ended</span>
                   </div>
                   <div className="card-action">
                     <Button className="createBtn" onTouchTap={this.onOpenEndedNext}>Create</Button>
                   </div>
                 </div>

               </div>
             </div>
             <div className='col s6 m6 l6'>
                {this.showQuestion()}

             </div>
           </div>
         )
       default:
         return 'You\'re a long way from home sonny jim!';
     }
   }

  render() {

    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (

        <div className="row backgroundCardOther">
          <div className='col s12 m12 l12 card no-shadow'>
            <div className="row ">
              <div className='col s12 m12 l12 card no-shadow'>

              <div style={{width: '100%', maxWidth: '100%', margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                  <Step>
                    <StepLabel iconContainerStyle={{width: 70}}>Name</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel iconContainerStyle={{width: 70}}>Customize</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel iconContainerStyle={{width: 70}}>Present</StepLabel>
                  </Step>
                </Stepper>
                <div style={contentStyle}>
                  <div>
                    <p>{this.getStepContent(stepIndex)}</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ auth, lecture, session, questionsList }) => ({ auth, lecture, session, questionsList })

const mapDispatchToProps = { createSession, createLecture , activateSession, updateLecture }
const TeacherCreateLoop = connect(mapStateToProps, mapDispatchToProps)(TeacherCreateLoopComponent)

export default TeacherCreateLoop;
