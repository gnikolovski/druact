import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {

  constructor() {
    super();
    this.state = {
      article_title: '',
      article_body: ''
    };
  }

  componentDidMount() {
    var self = this;
    this.serverRequest = axios.get('http://druact-api.goran.cloud/node/1?_format=json')
    .then(function(result){
      self.setState({
        article_title: result.data.title["0"].value,
        article_body: result.data.body["0"].value
      });
    })
  }

  render(){
    return (
      <div className="row top-buffer">
        <div className="col">
          <div className="card text-center">
            <div className="card-header">
              {this.state.article_title}
            </div>
            <div className="card-block" dangerouslySetInnerHTML={{__html: this.state.article_body}} />
          </div>
        </div>
      </div>
    );
  }
}

export default About
