import React, { Component } from 'react';
import { connect } from 'react-redux';

class MultipleChoiceStudentComponent extends Component {
  constructor() {
    super()
  }




  render() {
    return (
      <div className="row" id="student-multiple-choice">
        {
          this.props.currentQuestion.choices.map((choice, index) => {
            return (
              <div className="col l3 m6 s12" key={index}>
                <div className="row">
                  <div className="card answer z-depth-2">
                    <form className="answer-container">
                      <p className="answers">{choice}</p>
                    </form>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    )
  }
}

const mapStateToProps = ({ currentQuestion }) => ({ currentQuestion })

const MultipleChoiceStudent = connect(mapStateToProps)(MultipleChoiceStudentComponent)

export default MultipleChoiceStudent;
