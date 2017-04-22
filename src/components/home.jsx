import React, { Component } from 'react';

class Home extends Component {

  render(){
    return (
      <div className="row top-buffer">
        <div className="col">
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">Decoupled Drupal 8</h4>
              <p className="card-text">Thanks to REST web services in Drupal 8, we can build fully decoupled applications. What is the meaning of the decoupled in this context you may ask? Well, decoupled refers to a separation between the back-end and front-end. In this sense Drupal 8 is used as a back-end to store your content and provide API to your front-end applications. This means that you can connect your website, mobile application and anything you want to a single back-end.</p>
              <p className="card-text">The front-end for this website is built with React JS and Bootstrap 4. To achieve single application feel, I used newest version of React Router and this means that you don't have to refresh pages. To see why is decoupled Drupal a good thing visit the following article: <a href="http://buytaert.net/the-future-of-decoupled-drupal" target="_blank">The future of decoupled Drupal</a>. For now, I implemented the following things:</p>
              <ul className="list-group">
                <li className="list-group-item list-group-item-success">Articles fetching</li>
                <li className="list-group-item list-group-item-info">Basic page fetching</li>
                <li className="list-group-item list-group-item-warning">Contact form submission</li>
                <li className="list-group-item list-group-item-danger">User registration</li>
                <li className="list-group-item list-group-item-success">User login</li>
                <li className="list-group-item list-group-item-info">User info fetching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
