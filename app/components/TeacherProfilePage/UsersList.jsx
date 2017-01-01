import React, { Component } from 'react';
import { Button }  from 'react-materialize';
import FlatButton from 'material-ui/FlatButton';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { fetchUsersByEntity } from '../../reducers/usersList';
import { removeUserFromDatabase } from '../../reducers/usersList';


const style = {
  marginRight: 20,
};

class UsersListComponent extends Component {
  constructor() {
    super();
  }

  onDeleteUsersOnClick(e) {
    this.props.removeUserFromDatabase(e)
    .then(() => {
      this.props.fetchUsersByEntity(this.props.selectedEntity.id)
    })
  }

  render() {
    return (
      <div id="previous-loops">
        <div className="col s12 m12 l6 user">
          <Card>
            <CardHeader
              title='New User'
              avatar="/img/plus.jpg"
            />
            <CardText>Click below to create a new user for this entity</CardText>
            <CardText>Place Holder</CardText>
            <CardActions>
              <FlatButton>Create User</FlatButton>
            </CardActions>
          </Card>
        </div>
        {
          this.props.usersList.map((user, i) => (
            <div className="col s12 m12 l6 user" key={i}>
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
                <CardActions>
                  <FlatButton value={user.id} onClick={this.onDeleteUsersOnClick.bind(this, user.id)}>Delete User</FlatButton>
                </CardActions>
              </Card>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ usersList, selectedEntity }) => ({ usersList, selectedEntity });
const mapDispatchToProps = { removeUserFromDatabase, fetchUsersByEntity };
const UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersListComponent)

export default UsersList;
