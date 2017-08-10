import React, { Component } from 'react';
import { connect } from 'react-redux'
import './main.css';
import DetailList from './DetailList';
import DetailValues from './DetailValues';

class MovieDetails extends Component {
  render() {
    return (
      <div className="outer selected">
        <div className="detail-wrapper inner">
          <DetailList />
          <DetailValues />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
};

export default connect(mapStateToProps)(MovieDetails);