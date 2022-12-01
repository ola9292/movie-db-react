import React from 'react'
import MovieTemplate from './MovieTemplate'
import './style.css'
function Home(){
    const [movies, setMovies] = React.useState([])
    const [searchInput, setSearchInput] = React.useState('')
    const [searchWord, setSearchWord] = React.useState('')
    
  
   function handleChange(e){
        setSearchInput(e.target.value)
   }

   React.useEffect(()=>{
    let key = 'bfa62bd9'
   
    fetch('https://www.omdbapi.com/?apikey='+key+'&s='+searchWord)
    .then((response) => response.json())
    .then((data) => {console.log(data.Search)
        setMovies(data.Search)
        })
        
  },[searchWord])
    
 
   function handleSearch(){
        setSearchWord(searchInput)
       
   }
   let moviesArr;
   if(movies){
    moviesArr = movies.map(function(movie, index){
        return <MovieTemplate key={index}
                                movie={movie}/>
    })
   }
  
  
    return(
        <div>
            <div className="search-box">
                <input type="text" placeholder="movie name" onChange={handleChange} className="search-box-item"/>
                <button onClick={handleSearch} className="search-box-item">Search</button>  
            </div>
           
            <div className='movie-box-container'>
            {moviesArr}
            </div>
         
        </div>
    )
}

export default Home