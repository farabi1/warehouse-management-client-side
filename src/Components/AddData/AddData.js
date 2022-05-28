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
                    <form>
                        <label className="text-left">Name :</label>
                        <input

                            type='text' name='email' id='inputemail'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                        />
                        <label className="text-left">Text :</label>
                        <input

                            type='text' name='email' id='inputemail'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                        />
                        <label className="text-left">Rate :</label>
                        <input

                            type='text' name='email' id='inputemail'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                        />


                        <div className="flex items-center mt-3 justify-start">
                            <button onSubmit={handleSubmit(onSubmit)}
                                className="bg-teal-500 hover:bg-teal-600 py-1 px-2 text-lg text-white rounded"
                                value="Login"
                                type='submit'
                            >
                                Set Data
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddData;