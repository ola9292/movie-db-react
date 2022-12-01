import React from 'react'
import './style.css'
function WatchListTemplate({movie}){
    return(
        <div className='watchlist-box'>
            
            <img src={movie.Poster} alt="" width="300px"/>
            <h3>{movie.Title}</h3>
        </div>
    )
}

export default WatchListTemplate