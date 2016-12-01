import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router';

export default ({ auth }) => (
  <div className='col s2' id='teacher-profile-sidebar'>
    <div className="row">
        <img src={auth.imagePath} alt="You!"/>
        <h4>{auth.name}</h4>
    </div>
    <div className="row">
      View Old Loops
    </div>
    <div className="row">
      <Link to='/create-loop'><Button>Create a New Loop</Button></Link>
    </div>
  </div>
)
