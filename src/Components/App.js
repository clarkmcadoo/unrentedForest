<<<<<<< HEAD
import React, { Component } from "react";
import "../App.css";
import BaseLayout from "./BaseLayout";
import Details from "./Details";
import Movie from "./Movie";
=======

import React, { Component } from 'react';
import '../App.css';
import BaseLayout from './BaseLayout';
import Details from './Details';
import Movie from './Movie';

>>>>>>> 69494b0577c4fad9bdf9c62e14017d922e9869ef

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Movie />
          <Details />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
