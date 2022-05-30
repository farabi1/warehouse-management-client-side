import React from 'react';
import { useNavigate } from 'react-router-dom';


const InventoryItem = ({ inventory }) => {

    const { _id, name, img, text, rate } = inventory;
    const navigate = useNavigate();

    const toInventoryPage = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='my-6 bg-emerald-100 shadow-xl border rounded-lg'>

            <div className="flex justify-center m-4 mb-2">
                <img className="object-full h-48 w-96" src={img} alt="a" />
            </div>

            <div className="grid grid-cols-1">
                <div className="mx-16">
                    <h1 className='text-2xl'>Name: {name}</h1>
                    <h1> Description : {text}</h1>
                    <h1>Rating : {rate}</h1>
                </div>
                <div className="flex items-end justify-center">
                    <button onClick={() => toInventoryPage(_id)} className='bg-indigo-500 hover:bg-indigo-600 w-full py-2 px-4 border rounded-md font-semibold text-2xl text-white mx-2 mb-4' >Update</button>
                </div>
            </div>

        </div>
    );
};

export default InventoryItem;