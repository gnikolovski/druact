import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      date: ''
    }
  }

  componentDidMount() {
    var uid = localStorage.getItem('uid');
    var auth = localStorage.getItem('auth');
    var self = this;
    this.serverRequest = axios.get('http://druact-api.goran.cloud/user/' + uid + '?_format=json', {
      headers: {"Authorization":"Basic " + auth}
    })
    .then(function(result){
      var userDate = new Date(parseInt(result.data.created["0"].value, 10)*1000);
      self.setState({
        'name': result.data.name["0"].value,
        'email': result.data.mail["0"].value,
        'date': userDate.toISOString()
      });
    })
  }

  render(){
    return (
      <div className="row top-buffer">
        <div className="col-md-4 offset-md-4">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action list-group-item-success">
              User Profile
            </a>
            <a href="#" className="list-group-item list-group-item-action"><strong>Username:</strong>&nbsp;{this.state.name}</a>
            <a href="#" className="list-group-item list-group-item-action"><strong>Email:</strong>&nbsp;{this.state.email}</a>
            <a href="#" className="list-group-item list-group-item-action"><strong>Date:</strong>&nbsp;{this.state.date}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile
