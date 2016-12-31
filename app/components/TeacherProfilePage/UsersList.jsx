import React, { Component } from 'react';
import { Button }  from 'react-materialize';
import FlatButton from 'material-ui/FlatButton';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { fetchUsersByEntity } from '../../reducers/usersList';


const style = {
  marginRight: 20,
};

class UsersListComponent extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div id="previous-loops">
        {
          this.props.usersList.map((user, i) => (
            <div className="col s12 m12 l6" key={i}>
              <Card>
                <CardHeader
                  title={user.name}
                  avatar="/img/genericteacher.jpg"
                />
                <CardText>
                  Email: {user.email}
                </CardText>
                <CardText>
                  Role: {user.role}
                </CardText>
              </Card>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ usersList }) => ({ usersList });
const mapDispatchToProps = { };
const UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersListComponent)

export default UsersList;
