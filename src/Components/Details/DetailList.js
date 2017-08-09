import React, { Component } from 'react';

class DetailList extends Component {
  render() {
    return (
      <div>
        <ul className="list-wrapper">
          <li className="list-item" >Primary info</li>
          <li className="list-item">Alternative titles</li>
          <li className="list-item">Cast</li>
          <li className="list-item">Crew</li>
          <li className="list-item">Images</li>
          <li className="list-item">Plot keywords</li>
          <li className="list-item">Release information</li>
          <li className="list-item">Trailers</li>
          <li className="list-item">Translations</li>
          <li className="list-item">Similar movies</li>
          <li className="list-item">Reviews</li>
        </ul>
      </div>
    );
  }
}

export default DetailList;