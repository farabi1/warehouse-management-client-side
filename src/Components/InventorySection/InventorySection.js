import React from 'react';
import { Link } from 'react-router-dom';

const InventorySection = () => {
    return (
        <>
            <h1 className='text-center text-2xl text-orange-900'>Inventory Section</h1>

            <div className='bg-gray-100 py-12 shadow-md'>
                <Link to='/manageinventory'>Manage</Link>
            </div>
        </>
    );
};

export default InventorySection;