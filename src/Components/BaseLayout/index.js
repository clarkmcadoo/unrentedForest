import React from "react";
import "./main.css";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { movieGetter } from "../../actions";
import { bindActionCreators } from "redux";

const BaseLayout = props => {
  return (
    <div id="baseLayoutWrapper">
      <div id="headerWrapper">
        <h1 id="headerLogo">U.F.</h1>

        <SearchBar className="searchBar" handleSubmit={props.handleSubmit} />
      </div>
      <NavBar />
      {props.children}
    </div>
  );
};

function mapStateToProps(state, ownProps){
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSubmit: movieGetter
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
