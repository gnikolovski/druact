import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      success: '',
      error: ''
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

    axios.post('http://druact-api.goran.cloud/contact_message?_format=json', {
      contact_form: [{"target_id":"feedback"}],
      name: [{"value": this.state.name}],
      mail: [{"value": this.state.email}],
      subject: [{"value": this.state.subject}],
      message: [{"value": this.state.message}]
    })
    .then(function (response) {
      self.setState({
        'success': 'Message sent',
        'error': ''
      });
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
    return (
      <div className="row top-buffer">
        <div className="col">
          <form className="col-md-6 offset-md-3 text-center" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input name="name" value={this.state.name} onChange={this.handleChange} required type="textfield" className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <input name="email" value={this.state.email} onChange={this.handleChange} required type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <input name="subject" value={this.state.subject} onChange={this.handleChange} required type="textfield" className="form-control" placeholder="Enter subject" />
            </div>
            <div className="form-group">
              <textarea name="message" value={this.state.message} onChange={this.handleChange} required className="form-control" rows="5" placeholder="Enter message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send message</button>
            <div className="form-group messages">
              <p className="success">{this.state.success}</p>
              <p className="error" dangerouslySetInnerHTML={{__html: this.state.error}} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact
