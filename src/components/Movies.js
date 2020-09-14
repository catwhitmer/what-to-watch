import React from 'react'

const Movies = (props) => {
    console.log(props.results)

    return (
        <div>
            <h2> Movies </h2>
                {props.results.map(result => 
                    <li> {result.title} - {result.backdrop_path} - {result.release_date} </li>)}
        </div>
    )
}

export default Movies