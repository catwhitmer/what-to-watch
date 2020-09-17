import React from 'react'

const APIURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=ff0c237eec536bb28173dfdf3bf21a40`

class Movies extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
       results: [],
       movies: []
    }
   }
   
    componentDidMount() {
        fetch(APIURL)
        .then (resp => resp.json())
        .then ((data) => {
            this.setState({
                results: data.results
            })
            }
        )
    }

 

   render() {
       const { results } = this.state
        return (
            <div>
                <h2> Movies </h2> 
                    {results.map(movie => (
                        <li key={movie.id}> {movie.title} </li>
                    ))}
            </div>
        )
   }

}

export default Movies