import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase.init';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';



const provider = new GoogleAuthProvider();


const Signup = () => {
    const [confirmError, setConfirmError] = useState('');

    const [userInfo, setUserInfo] = useState({
        email: '',
        passwoed: '',
        confirmpass: ''
    })

    // Creating user
    const [
        createUserWithEmailAndPassword,
        User,
        Loading,
        Error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleForInput = (event) => {

        userInfo[event.target.name] = event.target.value;
    }

    const handlesubmit = (event) => {
        event.preventDefault();

        if (userInfo.password !== userInfo.confirmPass) {
            setConfirmError('Password not matched');
            return;
        } else {
            setConfirmError("")
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }


        console.log(userInfo);
    }
    const navigate = useNavigate();

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                console.log(user);
                navigate("/");
            })
            .catch((error) => {

                console.log(error);
            });
    };
    return (
        <div>
            <Header></Header>
            <div className="w-full max-w-md m-auto mt-10 bg-white rounded-lg border shadow-lg">

                <div className="m-6">
                    <div className="flex items-center my-5 justify-center">
                        <h1 className="text-3xl font-bold mt-6 mb-4">
                            Signup for New account
                        </h1>
                    </div>

                    <form onSubmit={handlesubmit} >

                        <div>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input
                                    onBlur={(event) => handleForInput(event)}

                                    type='text'
                                    name='email'
                                    id='inputemail'
                                    placeholder='Email'
                                    className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-left">Password :</label>
                            <input

                                onBlur={(event) => handleForInput(event)}

                                name='password'
                                type='password'
                                id='inputpassword'
                                placeholder='Password'
                                className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                            />
                        </div>
                        <div>
                            <label className="text-left">Confirm Password :</label>
                            <input
                                onBlur={(event) => handleForInput(event)}

                                name='confirmPass'
                                type='password'
                                id='password'
                                placeholder='Confirm Password'
                                className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                            />
                        </div>
                        <h1 className=' text-red-500 text-lg'>{confirmError}</h1>

                        <div className="flex items-center mt-3 justify-start">
                            <button type='submit'
                                className="bg-teal-500 hover:bg-teal-600 w-full py-1 px-2 text-lg text-white rounded"

                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="my-4">
                        <button className="py-2 px-4 w-full border rounded-md border-emerald-300 bg-emerald-500 text-white hover:bg-sky-600 hover:text-white" onClick={googleAuth}>

                            <p className='text-lg font-semibold'>Google Signup</p>

                        </button>
                    </div>
                    <div className="flex items-center mt-5">
                        <button className="justify-center ">
                            <p>Already have an account? <Link className='text-teal-500' to="/login">Login Here</Link> </p>
                        </button>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signup;



