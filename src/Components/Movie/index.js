import React, { Component } from "react";
import "./main.css";
import { connect } from "react-redux";
import { playingNowMovies, getDetails } from "../../actions";
import { bindActionCreators } from "redux";
import Slider from "react-slick";

// import {getDetails} from "../../actions";

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
      dots: true,
      responsive: [
        {
          breakpoint: 1084,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 549,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

    let imageStr = "https://image.tmdb.org/t/p/w300/";
    let movies = this.props.movies.map((details, index) => {
      return (
        <div data-index={index} key={index}>
          <div className="movie_card" key={index}>
            <img
              className="poster"
              src={`${imageStr}${details.poster_path}`}
              alt={details.title}
              id={details.id}
              onClick={e => this.props.getDetails(e.target.id)}
            />
            <h3 className="movieTitle">
              {details.title}
            </h3>
            <h5 className="releaseDate">
              {parseInt(details.release_date.substr(5, 2), 10) +
                "/" +
                parseInt(details.release_date.substr(8, 2), 10) +
                "/" +
                details.release_date.substr(0, 4)}
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
  return {
    subheader: state.titles.subheader,
    movies: state.titles.movies
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ playingNowMovies: playingNowMovies, getDetails: getDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
