import React, { Component } from 'react';
import axios from 'axios';

import {
  NavLink,
  Redirect
} from 'react-router-dom';

class Register extends Component {

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

    if (this.state.password !== this.state.password2) {
      self.setState({
        'success': '',
        'error': 'Passwords do not match'
      });
      return;
    }

    axios.post('http://druact-api.goran.cloud/user/register?_format=json', {
      name: [{"value": this.state.name}],
      mail: [{"value": this.state.email}],
      pass: [{"value": this.state.password}]
    })
    .then(function (response) {
      self.setState({
        'success': 'Registration successful',
        'error': ''
      });
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
        <Redirect to="/user/login" />
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
              <input name="email" value={this.state.email} onChange={this.handleChange} required type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <input name="password" value={this.state.password} onChange={this.handleChange} required type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-group">
              <input name="password2" value={this.state.password2} onChange={this.handleChange} required type="password" className="form-control" placeholder="Enter password again" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <div className="form-group messages">
              <p className="success">{this.state.success}</p>
              <p className="error" dangerouslySetInnerHTML={{__html: this.state.error}} />
            </div>
            <NavLink to="/user/login">Already have an account?</NavLink>
          </form>
        </div>
      </div>
    );
  }
}

export default Register
