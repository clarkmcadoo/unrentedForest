import React from "react";
import "./main.css";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";

const BaseLayout = props => {
  return (
    <div id="baseLayoutWrapper">
      <div id="headerWrapper">
        <div id="logoWrapper">
          <h1 id="headerLogo">U.F.</h1>
        </div>
        <SearchBar />
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
