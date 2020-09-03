import React from 'react';
import './App.css';
import Movies from './components/Movies'

const APIURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=ff0c237eec536bb28173dfdf3bf21a40`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoaded: false,
      results: {}
    }
  }

  componentDidMount() {
    fetch(APIURL)
    .then(response => response.json())
    .then(data => { 
      this.setState ({
        isLoaded: true, 
        results: data.results 
        })
      }
    )
  }
  
  
  render() {
    const { isLoaded, results} = this.state
    console.log(isLoaded)
    console.log(results)
    return (
      <div className="App">
        <h1>What To Watch</h1>
        <Movies results={this.state.results}/>
      </div>
    );
  }
}

export default App;
