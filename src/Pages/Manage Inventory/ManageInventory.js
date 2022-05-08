import React from 'react';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import useInventory from '../../Custom Hook/useInventory';


const ManageInventory = () => {

  const [inventories, setInventory] = useInventory([]);

  const itemDelete = id => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://serene-forest-41494.herokuapp.com/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remainedItem = inventories.filter(inventory => inventory._id !== id);
          setInventory(remainedItem);
        })
    }
  }
  return (
    <div>
      <Header></Header>
      <div className='w-full max-w-md m-auto mt-10 bg-white rounded-lg border shadow-lg px-10 py-5'>
        {
          inventories.map(inventory => <div className='flex items-center justify-between' key={inventory._id}>
            <h5>{inventory.name} </h5><button className=' bg-red-500 hover:bg-red-600 text-white py-1 px-2 border rounded-lg' onClick={() => itemDelete(inventory._id)}>DELETE</button>

          </div>)
        }
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ManageInventory;