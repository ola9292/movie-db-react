import React, { useContext} from 'react'
import { Context } from "./Context"
import { Link } from 'react-router-dom'

function MovieTemplate({movie}){
    const { addToWatchList} = useContext(Context)
  
    return(
    
        <div className='movie-box'>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt="" width="200px"/>
            <br />
            <Link to={`/${movie.imdbID}`} className="more-btn">more...</Link>
            <button onClick={()=>{addToWatchList(movie)}} className="add-btn">+</button>
        </div>

    )
}

export default MovieTemplate