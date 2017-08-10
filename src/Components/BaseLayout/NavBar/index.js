import React from 'react';
import './main.css';
import { playingNowMovies, upcomingMovies, topRatedMovies, popularMovies } from '../../../actions';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';


const NavBar = (props) => {
  console.log('props nav: ', props);
    return (
      // Home(nowplaying), upcoming, popular, top rated
      <div id="navWrapper">
        <div id="dropDownLinks">
          <button onClick={()=>props.playingNowMovies()} className="navLink">Home</button>
          <button onClick={()=>props.upcomingMovies()} className="navLink">Upcoming</button>
          <button onClick={()=>props.popularMovies()} className="navLink">Popular</button>
          <button onClick={()=>props.topRatedMovies()} className="navLink">Top Rated</button>
        </div>
        <div id="dropDownButton"><div id="arrowWrap">
          <div id="arrow"></div>
        </div></div>
      </div>
    );
}

function mapStateToProps(state, ownProps){
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    playingNowMovies: playingNowMovies,
    upcomingMovies: upcomingMovies,
    topRatedMovies: topRatedMovies,
    popularMovies: popularMovies
  },
  dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);