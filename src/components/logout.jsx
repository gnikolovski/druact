import React, { Component } from 'react';

import {
  Redirect
} from 'react-router-dom';

class Logout extends Component {

  componentWillMount() {
    localStorage.removeItem('username');
    localStorage.removeItem('uid');
    localStorage.removeItem('csrf_token');
    localStorage.removeItem('logout_token');
    localStorage.removeItem('auth');
  }

  render(){
    return (
      <Redirect to="/" />
    );
  }
}

export default Logout
