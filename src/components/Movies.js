import React from 'react'

const Movies = (props) => {
    console.log(props.results)

    return (
        <div>
            <h2> Movies </h2>
              {props.results && props.results.map(movie =>
                    <li> {movie.title} </li>)}
        </div>
    )
}

export default Movies