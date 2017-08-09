import React, { Component } from 'react';
import { connect } from 'react-redux'
import './main.css';

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <ul>  
          <li>Primary info</li>
          <li>Alternative titles</li>
          <li>Cast</li>
          <li>Crew</li>
          <li>Images</li>
          <li>Plot keywords</li>
          <li>Release information</li>
          <li>Trailers</li>
          <li>Translations</li>
          <li>Similar movies</li>
          <li>Reviews</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
};

export default connect(mapStateToProps)(MovieDetails);