import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fetchMovies: true,
      movieData: {}
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>What To Watch</h1>
      </div>
    );
  }
}

export default App;
