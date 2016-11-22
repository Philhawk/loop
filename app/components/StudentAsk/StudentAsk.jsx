import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentAskComponent extends Component {
  constructor() {
    super()
    this.testFunc = this.testFunc.bind(this)
  }

  testFunc(e) {
    console.log(this.props);
    this.props.socket.emit('test', {payload: e.target.value})
  }

  render() {
    return (
      <div id="ask-question">
        <p id="confusedText">
          Feeling confused in class Ask a question below and your teacher will see it in real time!
        </p>
        <div className="row card small z-depth-2">
          <form className="col s12" >
            <div className="row">
              <div className="input-field col s12">
                <textarea name="studentAsk" id="ask-question-field" className="materialize-textarea" onChange={this.testFunc}></textarea>
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

const mapStateToProps = ({ currentQuestion, socket }) => ({ currentQuestion, socket })

const StudentAsk = connect(mapStateToProps, null)(StudentAskComponent)

export default StudentAsk;
