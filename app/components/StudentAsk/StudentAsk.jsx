import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentAskComponent extends Component {
  constructor() {
    super()
    this.onQuestionSubmit = this.onQuestionSubmit.bind(this)
  }

  onQuestionSubmit(e) {
    e.preventDefault()
    // shows the questions
    this.props.socket.emit('studentAsk', {question: e.target.studentAsk.value})
    // clears the form after submit
    e.target.studentAsk.value = '';
  }

  render() {
    return (
      <div id="ask-question">
        <p id="confusedText">
          Feeling confused in class Ask a question below and your teacher will see it in real time!
        </p>
        <div className="row card small z-depth-2">
          <form className="col s12" onSubmit={this.onQuestionSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <textarea name="studentAsk" id="ask-question-field" className="materialize-textarea"></textarea>
                <label className="labelText" htmlFor="textarea1">Ask a question here...</label>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ socket }) => ({ socket })

const StudentAsk = connect(mapStateToProps, null)(StudentAskComponent)

export default StudentAsk;
