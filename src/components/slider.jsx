import React, { Component } from 'react';

class Slider extends Component {
  render(){
    return (
      <div className="row top-buffer">
        <div className="col">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block img-fluid" src="http://placehold.it/1140x250?text=Single+Page+Application" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="http://placehold.it/1140x250?text=Drupal+8+is+great+for+back-end" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="http://placehold.it/1140x250?text=React+is+amazing+for+building+user+interfaces" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="http://placehold.it/1140x250?text=Bootstrap+4+makes+things+look+nicer" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider
