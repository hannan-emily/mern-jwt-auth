import React from 'react';
import axios from 'axios';

const UserProfile = props => {
  return (
    <div>
      <p>Hello, {props.user.name}!</p>
      <a onClick={props.logout}>Logout!</a>
    </div>
  )
}

export default UserProfile;
