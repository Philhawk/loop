import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Button} from 'react-materialize';
import { connect } from 'react-redux';
import { createStudentQuestion, answerQuestion, studentRemoveQuestion } from '../../../reducers/studentQuestions';
import store from '../../../store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

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

class TeacherPresentTabbedLeftComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.props.socket.on('newStudentQuestion', ({ question }) => {
      this.props.createStudentQuestion({questionContent: question, answered: false, session_id: this.props.session.id })
    })
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  render() {
    return (
      <div className="special-box-shadow">


            {
              this.props.studentQuestions.map((question, i) => ((

                <div>
                  <div className='bob'>
                    <List>
                      <div className="row student-question" key={i}>
                        <ListItem leftAvatar={<Avatar src="https://tracker.moodle.org/secure/attachment/30912/f3.png" size={50}/>}
                        secondaryText={
                            <p className='p-tag-surrounding-incoming-question'>
                              <span style={{color: darkBlack, 'padding-right': '1em'}}>
                                {question.content}
                              </span>
                              <span >
                                <Button
                                  floating
                                  style={{'float': 'right', marginTop: '-0.0878em;'}}
                                  className="green"
                                  waves="light"
                                  icon="done"
                                  onClick={() => {
                                    this.props.studentRemoveQuestion(i)
                                    this.props.answerQuestion(question)
                                  }}
                                 />
                              </span>
                            </p>
                        }
                        secondaryTextLines={2} />
                      </div>
                    </List>
                  </div>
                  <div>
                    <Divider inset={true} />
                  </div>
                </div>
              ))
              )
            }

      </div>
    );
  }
}


const mapStateToProps = ({ socket, studentQuestions, session }) => ({ socket, studentQuestions, session })
const mapDispatchToProps = { createStudentQuestion, answerQuestion, studentRemoveQuestion }
const TeacherPresentTabbedLeft = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentTabbedLeftComponent)

export default TeacherPresentTabbedLeft;
