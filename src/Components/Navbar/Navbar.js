import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase.init';
import './Navbar.css'


const Navbar = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [])

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="flex items-center justify-between bg-slate-100 shadow-md">

      <div className="mx-8 m-6">
        <Link className="text-teal-500 hover:text-teal-600 font-bold text-4xl shadow-lg p-2" to='/'>FR</Link>
      </div>

      <div className="m-6 text-xl text-teal-500 font-semibold ">
        <Link className="mx-3 hover:text-teal-600" to='/'>Home</Link>
        <Link className="mx-3 hover:text-teal-600" to='/about'>About</Link>
        <Link className="mx-3 hover:text-teal-600" to='/inventory'>Inventory</Link>
        <Link className="mx-3 hover:text-teal-600" to='/blogs'>Blogs</Link>
        {
          user?.uid ? (<Link className="mx-3 hover:text-teal-600" to='/receivedata'>Item Submission</Link>) :
            (
              <Link to='/login' className='mx-3 font-semibold shadow-sm'>Add Item</Link>
            )}

        {
          user?.uid ? (<button onClick={handleLogout} className='font-semibold shadow-sm'>Logout</button>) :
            (<Link className="mx-3 hover:text-teal-600" to='/login'>Login</Link>
            )}
      </div>
    </div>

  );
};

export default Navbar;
