import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between bg-slate-100 shadow-md">

        <div className="mx-8 m-6">
          <Link className="text-teal-500 hover:text-teal-600 font-bold text-4xl shadow-lg p-2" to='/'>FR</Link>
        </div>




        <div className="m-6 text-xl text-teal-500 font-semibold ">
          <Link className="mx-3 hover:text-teal-600" to='/'>Home</Link>
          <Link className="mx-3 hover:text-teal-600" to='/about'>About</Link>
          <Link className="mx-3 hover:text-teal-600" to='/inventry'>Inventry</Link>
          <Link className="mx-3 hover:text-teal-600" to='/blogs'>Blogs</Link>
          <Link className="mx-3 hover:text-teal-600" to='/login'>Login</Link>

        </div>

      </div>
    </div>
  );
}

export default Navbar