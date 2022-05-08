import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import InventoryItem from '../../Components/InventoryItem/InventoryItem';
import useInventory from '../../Custom Hook/useInventory';


const Inventory = () => {

  const [inventories, setInventory] = useInventory([]);
  useEffect(() => {
    fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventory(data));
}, [setInventory])
  return (
    <div>
      <Header></Header>
      <div className='py-12 shadow-md'>
        <div className='grid grid-cols-3 gap-6 mx-7'>
          {
            inventories.map(inventory => <InventoryItem key={inventory._id} inventory={inventory}></InventoryItem>)
          }
        </div>
        <div className=" flex justify-end text-2xl text-white mx-8 ">
          <Link className='bg-emerald-500 hover:bg-emerald-600 py-2 px-4 border rounded-md' to='/manageinventory'>Manage</Link>
        </div>
      </div>
      
      <Footer></Footer>

    </div>
  );
};

export default Inventory;