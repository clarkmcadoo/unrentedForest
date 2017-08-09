import React, { Component } from 'react';
import { connect } from 'react-redux'
import './main.css';

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <h1>Movie Details Go Here!!!</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
};

export default connect(mapStateToProps)(MovieDetails);