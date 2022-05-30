import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import useInventory from '../../Custom Hook/useInventory';


const ManageInventory = () => {

  const [inventories, setInventory] = useInventory([]);

  const itemDelete = id => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://serene-forest-41494.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remainedItem = inventories.filter(item => item._id !== id);
          setInventory(remainedItem);
          toast.success('This Item is deletd')

        })
    }
  }
  return (
    <div>
      <Header></Header>
      <div className='w-full max-w-md m-auto mt-10 bg-white rounded-lg border shadow-lg px-10 py-5'>
        <table class="table-fixed border-separate [border-spacing:0.75rem] gap-10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {
              inventories.map(inventory => <tr>
                <td>{inventory.name} </td>
                <td> <button className=' bg-red-600 hover:bg-red-700 text-white py-1 px-2 border rounded-lg'
                  onClick={() => itemDelete(inventory._id)}>DELETE</button></td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ManageInventory;


