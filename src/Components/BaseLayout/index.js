import React from "react";
import "./main.css";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { movieGetter } from "../../actions";

<<<<<<< HEAD
const BaseLayout = (props) => {
  
    return (
      <div id="baseLayoutWrapper">
        <div id="headerWrapper">
          <h1 id="headerLogo">U.F.</h1>
          <div id="searchBar">SEARCH BAR</div>
        </div>
        <NavBar/>
        {props.children}
=======
const BaseLayout = props => {
  return (
    <div id="baseLayoutWrapper">
      <div id="headerWrapper">
        <h1 id="headerLogo">U.F.</h1>

        <SearchBar handleSubmit={props.handleSubmit} />
>>>>>>> 27f11a83d0ea4340e800703fc49d0737181eb951
      </div>
      <NavBar />
      {props.children}
    </div>
  );
};

const mapDispatchToProps = () => {
  handleSubmit: movieGetter;
};

export default connect(mapDispatchToProps)(BaseLayout);
