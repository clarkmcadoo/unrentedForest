import React from 'react';
import './main.css';
import NavBar from './NavBar';

const BaseLayout = (props) => {
  
    return (
      <div id="baseLayoutWrapper">
        <div id="headerWrapper">
          <div id="logoWrapper">
            <h1 id="headerLogo">U.F.</h1>
          </div>
          <div id="searchBar">SEARCH BAR</div>
        </div>
        <NavBar/>
      </div>
    );
  }


export default BaseLayout;