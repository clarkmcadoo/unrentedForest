import React from 'react';
import './main.css';
// import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
    return (
      // Home(nowplaying), upcoming, popular, top rated
      <div id="navWrapper">
        <div id="dropDownLinks">
          <a href="/" className="navLink">Home</a>
          <a href="/upcoming" className="navLink">Upcoming</a>
          <a href="/popular" className="navLink">Popular</a>
          <a href="/top-rated" className="navLink">Top Rated</a>
        </div>
        <div id="dropDownButton"><div id="arrowWrap">
          <div id="arrow"></div>
        </div></div>
      </div>
    );
}

export default NavBar;