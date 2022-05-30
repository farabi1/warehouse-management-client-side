import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../Custom Hook/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventorySection = () => {

    const [inventories, setInventory] = useInventory([]);
    useEffect(() => {
        fetch('https://serene-forest-41494.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [setInventory])

    return (
        <>
            <h1 className='text-center text-4xl text-orange-900 font-semibold my-8'>Inventory Section</h1>


            <div className='bg-gray-100 py-12 shadow-md'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-7'>
                    {
                        inventories.slice(0, 6).map(inventory => <InventoryItem key={inventory._id} inventory={inventory}></InventoryItem>)
                    }
                </div>
                <div className=" flex justify-center lg:justify-end text-2xl text-white mx-8 ">
                    <Link className='bg-teal-400 hover:bg-teal-500 py-2 px-4 border rounded-md w-1/4 text-center' to='/manageinventory'>Manage</Link>
                </div>
            </div>
        </>
    );
};

export default InventorySection;