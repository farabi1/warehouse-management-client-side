import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'


const Inventory = () => {
  return (
    <div>
      <Header></Header>
      <h1>Inventry</h1>
      <Link to='/manageinventory'>Manage</Link>
      <Footer></Footer>

    </div>
  );
};

export default Inventory;