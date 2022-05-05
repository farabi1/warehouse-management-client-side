import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <div className="">
            {/* left */}
            <div className="">
                <img src="" alt="Logo" />
            </div>


            {/* right */}
            
            <div className="">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/inventry'>Inventry</Link>
                
            </div>

        </div>
    </div>
  )
}

export default Navbar