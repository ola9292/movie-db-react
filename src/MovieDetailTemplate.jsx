import React from 'react'


function MovieDetailTemplate({movie}){
    return(
        <div className='detail-box'>
            <img src={movie.Poster} alt=""/>
            <div className='detail-box-desc'>
                <h2  className='detail-box-title'>Title: {movie.Title}</h2>
                <p>Actors: {movie.Actors}</p>
                <p>Box-office: {movie.BoxOffice}</p>
                <p>Year: {movie.Year}</p>
                <p>Gnere: {movie.Genre}</p>
                <p>Plot: {movie.Plot}</p>
            </div>
        </div>
    )
}

export default MovieDetailTemplate;