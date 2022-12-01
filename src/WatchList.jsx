import React, { useContext } from 'react'
import { Context } from "./Context"
import WatchListTemplate from './WatchListTemplate'
import './style.css'

function WatchList(){
    const { watchList } = useContext(Context)
    console.log(watchList)
    let watchListArr = watchList.map(function(movie, index){
        return <WatchListTemplate key={index}
                                    movie={movie}/>
    })
    return(
        <div>
            <h2>Your WatchList</h2>
            <div className='watchlist-container'>
                {watchListArr}
            </div>
            
        </div>
    )
}

export default WatchList