import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
      <div className="row top-buffer bottom-buffer">
        <div className="col">
          <div className="card">
            <div className="card-block text-center">
              <small>Created by <a href="http://gorannikolovski.com" target="_blank">Goran Nikolovski</a> | <a href="https://github.com/gnikolovski/druact" target="_blank">Get the code from Github</a></small><br /><br />
              <div className="row">
                <div className="col-md">
                  <a href="https://www.drupal.org" target="_blank">
                    <img alt="" src="/images/drupal8.png" height="30" />
                  </a>
                </div>
                <div className="col-md">
                  <a href="https://facebook.github.io/react/" target="_blank">
                    <img alt="" src="/images/react.png" height="30" />
                  </a>
                </div>
                <div className="col-md">
                  <a href="http://getbootstrap.com" target="_blank">
                    <img alt="" src="/images/bootstrap4.png" height="30" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer
