import React, { Component } from 'react';
import axios from 'axios';

import {
  NavLink,
  Redirect
} from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      success: '',
      error: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    var self = this;

    axios.post('http://druact-api.goran.cloud/user/login?_format=json', {
      name: this.state.name,
      pass: this.state.password
    })
    .then(function (response) {
      self.setState({
        'success': 'Login successful',
        'error': ''
      });

      localStorage.setItem('username', response.data.current_user.name);
      localStorage.setItem('uid', response.data.current_user.uid);
      localStorage.setItem('csrf_token', response.data.csrf_token);
      localStorage.setItem('logout_token', response.data.logout_token);
      localStorage.setItem('auth', window.btoa(self.state.name + ':' + self.state.password));

      self.setState({redirect: true});
    })
    .catch(function (error) {
      var errorResponse = error.response.data.message;
      errorResponse = errorResponse.replace(/(?:\r\n|\r|\n)/g, '<br />');
      self.setState({
        'success': '',
        'error': errorResponse
      });
    });
  }

  render(){

    if (this.state.redirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="row top-buffer">
        <div className="col">
          <form className="col-md-6 offset-md-3 text-center" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input name="name" value={this.state.name} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <input name="password" value={this.state.password} onChange={this.handleChange} required type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div className="form-group messages">
              <p className="success">{this.state.success}</p>
              <p className="error" dangerouslySetInnerHTML={{__html: this.state.error}} />
            </div>
            <NavLink to="/user/register">Don't have an account?</NavLink>
          </form>
        </div>
      </div>
    );
  }
}

export default Login
