import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router';

export default ({ auth }) => (
  <div className='col s2' id='teacher-profile-sidebar'>
    <div className="row">
        <img className='user-profile-pic' src={auth.imagePath} alt="You!"/>
        <h4>{auth.name}</h4>
    </div>
    <div className="row">
      <Link to='/profile/previousLoops'><Button>Saved Loops</Button></Link>
    </div>
    <div className="row">
      <Link to='/create-intro'><Button>Create Loop</Button></Link>
    </div>
  </div>
)
