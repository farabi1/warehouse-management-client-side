import React from 'react';

const InventoryItem = (props) => {

    const { name, img, text, rate } = props.inventory;

    return (
        <div className='my-6 bg-emerald-100 shadow-xl border rounded-lg'>

            <div className="m-4 mb-2">
                <img className="object-cover w-full" src={img} alt="a" />
            </div>

            <div className="mx-4 my-5">
                <h1 className='text-2xl'>Name: {name}</h1>
                <h1>{text}</h1>
                <h1>Rating : {rate}</h1>
            </div>
            <div className="flex items-end justify-center">
                <button className=' bg-emerald-500 hover:bg-emerald-600 py-2 px-4 border rounded-md font-semibold text-2xl text-white mx-2 my-4 '>Update</button>
            </div>

        </div>
    );
};

export default InventoryItem;