import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Inventry() {
  return (
    <div>
        <Header></Header>
        <h1>Inventry</h1>
        <Link to='/manageinventry'>Manage</Link>
        <Footer></Footer>
    </div>
  )
}

export default Inventry