import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";

const AddData = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = `https://serene-forest-41494.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                console.log(register);
            })
    };



    return (
        <div >
            <Header></Header>
            <div className="className='w-full max-w-md m-auto mt-10 bg-white rounded-lg border shadow-lg'">
                <div className="m-6">
                    <div className="flex items-center my-5 justify-center">
                        <h1 className="text-3xl font-bold mt-6 mb-4">
                            Add Data To List
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="text-left">Item's Image Url :</label>
                        <input

                            type='text' name='email' placeholder='Image Url'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                            {...register("img")}

                        />
                        <label className="text-left">Item's Name :</label>
                        <input

                            type='text' name='name' placeholder='Item name'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                            {...register("name")}

                        />
                        <label className="text-left">Item's description :</label>
                        <textarea

                            type='text' name='description' placeholder='Item description'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                            {...register("text")}

                        />
                        <label className="text-left">Item's Rate :</label>
                        <input

                            type='number' name='rate'
                            placeholder='Place your Rate'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                            {...register("rate")}

                        />

                        <input
                            className="bg-teal-500 hover:bg-teal-600 text-lg text-white py-2 px-4 w-full rounded-md mt-5"
                            value="Set Data"
                            type='submit'


                        />

                    </form>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddData;