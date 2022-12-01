import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import WatchList from './WatchList'
import MovieDetail from './MovieDetail'
import { Link, Routes, Route } from 'react-router-dom'
import './style.css'
function App() {
  

  return (
    <div className="App">
     <Header />
     <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/:id" element={ <MovieDetail /> } />
        <Route path="watchlist" element={ <WatchList/> } />
        
     </Routes>
    </div>
  )
}

export default App
