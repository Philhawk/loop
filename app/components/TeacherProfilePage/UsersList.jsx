import React, { Component } from 'react';
import { Button } from '@material-ui/core/Button';

import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardText } from '@material-ui/core/Card';
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
              <Button variant="flat">Create User</Button>
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
                  <Button variant="flat" value={user.id} onClick={this.onDeleteUsersOnClick.bind(this, user.id)}>Delete User</Button>
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
