import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { callStudentSelectA, callStudentSelectB, callStudentSelectC, callStudentSelectD } from '../../../reducers/data';


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

class TeacherPresentTabbedRightComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };

    this.props.socket.on('studentAnswer', ({answer}) => {
      console.log("YO YO YO", answer, typeof answer)
      if(answer === 0) this.props.callStudentSelectA()
      else if(answer === 1) this.props.callStudentSelectB()
      else if(answer === 2) this.props.callStudentSelectC()
      else if(answer === 3) this.props.callStudentSelectD()
    })
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="card">
          <span className="card-title">
            Data
          </span>
          <div>
            <p>A: {this.props.data[0]}</p>
            <p>B: {this.props.data[1]}</p>
            <p>C: {this.props.data[2]}</p>
            <p>D: {this.props.data[3]}</p>
          </div>
      </div>
    );
  }
}

const mapStateToProps = ({socket, data }) => ({socket, data})
const mapDispatchToProps = { callStudentSelectA, callStudentSelectB, callStudentSelectC, callStudentSelectD }
const TeacherPresentTabbedRight = connect(mapStateToProps, mapDispatchToProps)(TeacherPresentTabbedRightComponent)

export default TeacherPresentTabbedRight;

  //Bring back the tabs for more data views

        // <Tabs
        //   onChange={this.handleChange}
        //   value={this.state.slideIndex}
        // >
        //   <Tab className="teacherPresentTabs" label="Data" value={0} />          onChange={this.handleChange}
        //   value={this.state.slideIndex}
        // >
        //   <Tab className="teacherPresentTabs" label="Data" value={0} />
        // </Tabs>
