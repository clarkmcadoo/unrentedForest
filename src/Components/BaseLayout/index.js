import React from "react";
import "./main.css";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { movieGetter } from "../../actions";

const BaseLayout = props => {
  return (
    <div id="baseLayoutWrapper">
      <div id="headerWrapper">
        <h1 id="headerLogo">U.F.</h1>

        <SearchBar handleSubmit={props.handleSubmit} />
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
