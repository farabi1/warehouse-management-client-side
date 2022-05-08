import React from 'react';
import { Link } from 'react-router-dom';

const InventorySection = () => {
    return (
        <div>
            <h1 className='text-center text-2xl text-orange-900'>Inventory Section</h1>
            <Link to='/manageinventry'>Manage</Link>
        </div>
    );
};

export default InventorySection;