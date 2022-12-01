import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Header(){
    return(
        <div className='nav'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/watchlist" className='nav-link nav-link-2'>Watchlist</Link>
        </div>
    )
}

export default Header