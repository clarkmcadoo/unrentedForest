import React, { Component } from "react";
import "./main.css";
import { connect } from "react-redux";
import { playingNowMovies } from "../../actions";
import { bindActionCreators } from "redux";
import Slider from "react-slick";

// need to get the field names from backend and also figure out the subheader variable name from store
class Movie extends Component {
  componentWillMount() {
    this.props.playingNowMovies();
  }
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipeToSlide: true,
      swipe: true,
      arrows: true,
      dots: true
    };

    //maybe w150 also
    let imageStr = "https://image.tmdb.org/t/p/w300/";
    let movies = this.props.movies.map((details, index) => {
      return (
        <div data-index={index} key={index}>
          <div className="movie_card" key={index}>
            <img
              className="poster"
              src={`${imageStr}${details.poster_path}`}
              alt={details.title}
            />
            <h3 className="movieTitle">
              {details.title}
            </h3>
            <h5 className="releaseDate">
              {details.release_date}
            </h5>
          </div>
        </div>
      );
    });
    return (
      <div className="movieMasterContainer">
        <h2 className="subheader">
          {this.props.subheader}
        </h2>
        <div>
          <button
            type="button"
            data-role="none"
            className="slick-prev slick-arrow"
            style={{ backgroundColor: "black" }}
          />
          {movies.length &&
            <Slider {...settings}>
              {movies}
            </Slider>}
        </div>
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
