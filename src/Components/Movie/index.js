import React, { Component } from "react";
import "./main.css";
import { connect } from "react-redux";
import { playingNowMovies } from "../../actions";
import { bindActionCreators } from "redux";

// imports for react-slick styling
import Slider from "react-slick";
// var slider = require("react-slick");

// need to get the field names from backend and also figure out the subheader variable name from store
class Movie extends Component {
  componentWillMount() {
    this.props.playingNowMovies();
  }
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      swipe: true,
      arrows: true,
      dots: true,
      focusOnSelect: true
    };

    //maybe w150 also
    let imageStr = "https://image.tmdb.org/t/p/w300/";
    console.log("LINE 28", this.props.movies);
    let movies = this.props.movies.map((details, index) => {
      return (
        <div data-index={index} key={index}>
          <div className="movie_card" key={index}>
            <img
              className="poster"
              src={`${imageStr}${details.poster_path}`}
              alt={details.title}
            />
            <h3>
              {details.title}
            </h3>
            <h5>
              {details.release_date}
            </h5>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>MOVIES</h1>
        <h2 className="subheader">
          {this.props.subheader}
        </h2>
        {movies.length &&
          <Slider {...settings}>
            {movies}
          </Slider>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state: ", state);
  return {
    subheader: state.titles.subheader,
    movies: state.titles.movies
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ playingNowMovies: playingNowMovies }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
