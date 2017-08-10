import React, { Component } from "react";
import './main.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentString: ""
    };
  }

  handleChange = e => {
    let currentString = e.target.value;
    this.setState({currentString});
  };

  sendData = e => {
    this.props.handleSubmit(this.state.currentString);
  };

  render() {
    return (
      <div className="SearchBar">
        <form>
          <input id="searchBar" type="text" onChange={this.handleChange} autoFocus />
          <button type="submit" onClick={this.sendData}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
