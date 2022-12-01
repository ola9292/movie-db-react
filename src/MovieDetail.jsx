import React from "react";
import { useParams } from 'react-router-dom'
import MovieDetailTemplate from "./MovieDetailTemplate";

function MovieDetail(){
    const { id } = useParams()
    const [ selectedMovie, setSelectedMovie] = React.useState([])
    console.log(id)

    let key = 'bfa62bd9'

    
       React.useEffect(()=>{
        
        fetch('https://www.omdbapi.com/?apikey='+key+'&i='+id)
        .then((response) => response.json())
        .then((data) => {console.log(data)
            setSelectedMovie(data)
        });
       },[])



    return(
        <div>
            <h2>Movie Details</h2>
            <MovieDetailTemplate movie={selectedMovie}/>
        </div>
    )
    
}

export default MovieDetail