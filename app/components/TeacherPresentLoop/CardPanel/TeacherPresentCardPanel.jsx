import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callRemoveQuestion } from '../../../reducers/questionsList';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { Button } from 'react-materialize';

class TeacherPresentCardPanelComponent extends Component {
  constructor() {
    super();
    this.onEndLecture = this.onEndLecture.bind(this);
  }

  generatePresentorStopButton() {
    return (
        <Link to='/post-loop-analysis'><Button waves='light' className="##d32f2f red darken-2" onClick={this.onEndLecture}>Stop Presentation</Button></Link>
    )
  }

  onEndLecture() {
    this.props.socket.emit('teacherEndsLecture', ({
      sessionString: this.props.session.sessionString
    }))
  }

  render() {
    return (
        <div>
            <div>
                {
                  this.props.questionsList.slice(0).map((question, i) => {
                    if(question.default === true) return null
                    else {
                      return (
                        <div className="col s4" key={i}>
                          <div className="card #37474f white-grey darken-3" >
                            <div className="card-content black-text">
                              <p>{question.content}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })
                }
            </div>
        </div>
    );
  }
}

const mapStateToProps = ({auth, questionsList }) => ({auth, questionsList})
const mapDispatchToProps = { callRemoveQuestion };
const TeacherPresentCardPanel = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentCardPanelComponent)

export default TeacherPresentCardPanel;
