
import React, { Component } from 'react';
import '../App.css';
import BaseLayout from './BaseLayout';
import Details from './details';
import Movie from './Movie';


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
