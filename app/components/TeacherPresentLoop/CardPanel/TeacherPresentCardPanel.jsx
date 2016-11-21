import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeacherPresentCardPanelComponent extends Component {
  constructor() {
    super();
  }

  //Number should be changed to the prop which contains the cards!
  generateCards = (num) => {
    const content = [];
    for(let i =0; i < num; i++){
        content.push(
            <div key={i} className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Fill in the blank</span>
                    <p>Your teachers name is ___________.</p>
                </div>
            </div> 
        )
    }
    return content;
  }

  render() {
    console.log(this.props);
    return (
        <div className="row">
            <div className="row TeacherPresentCurrentUser">
                <h4>{this.props.auth && this.props.auth.name || 'NotLoggedInFail'}</h4>
            </div>
            <div className="row TeacherPresentCardPanel">
                { this.generateCards(5) }
            </div>   
        </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth})
const TeacherPresentCardPanel = connect(mapStateToProps)(TeacherPresentCardPanelComponent)

export default TeacherPresentCardPanel;