import React, { useState, useEffect } from 'react'

const APIURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=ff0c237eec536bb28173dfdf3bf21a40`


function Movies() {
 
    const [ results, setResults ] = useState([]);
   
    useEffect(() => {
        fetch(APIURL)
        .then (resp => resp.json())
        .then ((data) => {
            setResults(data.results)
        })
    }, [])

    return (
        <div>
            <h2> Movies </h2> 
                {results.map(movie => (
                    <li key={movie.id}> {movie.title} </li>
                ))}
        </div>
    )

}

export default Movies