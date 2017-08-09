import React, { Component } from 'react';
import './main.css';
const BaseLayout = (props) => {
  
    return (
      <div id="baseLayoutWrapper">
        <div id="headerWrapper">
          <div id="logoWrapper">
            <h1 id="headerLogo">U.F.</h1>
          </div>
          <div id="searchBar">SEARCH BAR</div>
        </div>
      </div>
    );
  }


export default BaseLayout;