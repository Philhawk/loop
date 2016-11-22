import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeacherPresentCardPanelComponent extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
        <div className="row">
            <div className="row TeacherPresentCurrentUser">
                <h4>{this.props.auth && this.props.auth.name || 'NotLoggedInFail'}</h4>
            </div>
            <div className="row TeacherPresentCardPanel">
                {
                  this.props.questionsList.map(question => (
                    <div className="card #37474f white-grey darken-3">
                      <div className="card-content black-text">
                        <p key={question.id}>{question.content}</p>
                      </div>
                    </div>
                  ))
                }
            </div>
        </div>
    );
  }
}

const mapStateToProps = ({auth, questionsList }) => ({auth, questionsList})
const TeacherPresentCardPanel = connect(mapStateToProps)(TeacherPresentCardPanelComponent)

export default TeacherPresentCardPanel;
