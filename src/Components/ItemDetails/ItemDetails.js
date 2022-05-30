import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useInventory from '../../Custom Hook/useInventory';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ItemDetails = () => {
    const { inventoryid } = useParams();
    const [inventories, setInventory] = useInventory([]);

    useEffect(() => {
        const url = `https://serene-forest-41494.herokuapp.com/inventory/${inventoryid}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])

    const updateConfirm = () => {
        toast.success('Successfully  Delivered')
    }

    return (
        <div>
            <Header></Header>

            <div className="flex justify-center items-center">
                <div className='my-6 bg-emerald-100 shadow-xl border rounded-lg w-3/4'>

                    <div className="grid grid-cols-2">
                        <div className="m-4 mb-2">
                            <img className="object-cover w-full" src={inventories.img} alt="a" />
                        </div>

                        <div className="">
                            <div className="mx-4 my-5">
                                <h1 className='text-2xl'>Name: {inventories.name}</h1>
                                <h1>Description : {inventories.text}</h1>
                                <h1>Quantity : {inventories.quantity}</h1>
                            </div>
                            <div className="flex justify-start items-end">
                                <button onClick={() => updateConfirm()} className='bg-indigo-500 hover:bg-indigo-600 w-full py-2 px-4 border rounded-md font-semibold text-2xl text-white mx-2 my-4' >Delivered</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ItemDetails;