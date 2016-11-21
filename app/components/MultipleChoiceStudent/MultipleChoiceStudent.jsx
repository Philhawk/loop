import React, { Component } from 'react';
import { connect } from 'react-redux';

class MultipleChoiceStudentComponent extends Component {
  constructor() {
    super()
  }




  render() {
    return (
      <div className="row" id="student-multiple-choice valign-wrapper">
        {
          this.props.currentQuestion.choices.map((choice, index) => {
            return (
              <div className="col l3 m6 s12" key={index}>
                <div className="row">
                  <div className="card answer hoverable z-depth-1">
                    <form className="answer-container">
                      <p className="answers">{choice}</p>
                    </form>
                  </div>
                </div>
              </div>
            )
          })
        }
        <a className="submit-button-student" href="#">Submit Answer</a>

      </div>
    )
  }
}

const mapStateToProps = ({ currentQuestion }) => ({ currentQuestion })

const MultipleChoiceStudent = connect(mapStateToProps)(MultipleChoiceStudentComponent)

export default MultipleChoiceStudent;
