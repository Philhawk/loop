import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from '@material-ui/core/Card';
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
                  <Button variant="flat" value={entity.id} onClick={this.onViewUsersClick.bind(this, entity.id)}>View Users</Button>
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
