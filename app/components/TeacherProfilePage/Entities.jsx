import React, { Component } from 'react';
import { Button }  from 'react-materialize';
import FlatButton from '@material-ui/core/FlatButton';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from '@material-ui/core/Card';
import FloatingActionButton from '@material-ui/core/FloatingActionButton';
import ContentAdd from '@material-ui/core/svg-icons/content/add';
import { fetchUsersByEntity } from '../../reducers/usersList';
import { fetchEntity } from '../../reducers/selectedEntity';


const style = {
  marginRight: 20,
};

class EntitiesComponent extends Component {
  constructor() {
    super();
  }

  onViewUsersClick(entityId) {
    console.log("ID IN COMPONENT", entityId)
    this.props.fetchEntity(entityId)
    this.props.fetchUsersByEntity(entityId);
    browserHistory.push('/profile/usersList')
  }

  render() {
    return (
      <div id="previous-loops">
        {
          this.props.entities.map((entity, i) => (
            <div className="col s12 m12 l6" key={i}>
              <Card>
                <CardTitle title={entity.name} className="teacher-profile-loops"/>
                <CardText>
                  {entity.address}
                </CardText>
                <CardText>
                  {entity.phone}
                </CardText>
                <CardText>
                  {entity.type}
                </CardText>
                <CardActions>
                  <FlatButton value={entity.id} onClick={this.onViewUsersClick.bind(this, entity.id)}>View Users</FlatButton>
                </CardActions>
              </Card>
            </div>
          ))
        }

      </div>
    )
  }
}

const mapStateToProps = ({ entities }) => ({ entities });
const mapDispatchToProps = { fetchUsersByEntity, fetchEntity };
const Entities = connect(mapStateToProps, mapDispatchToProps)(EntitiesComponent)

export default Entities;
