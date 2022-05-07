import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';


const provider = new GoogleAuthProvider();

function Signup() {

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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
                    <form>
                        <label className="text-left">Email :</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                        />
                        <label className="">Password :</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 text-primary border-2 rounded-md outline-none text-sm mb-4"

                        />
                        <label className="">Confirm Password :</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 text-primary border-2 rounded-md outline-none text-sm mb-4"

                        />
                        <div className="flex items-center mt-3 justify-start">
                            <button
                                className="bg-teal-500 hover:bg-teal-600 py-1 px-2 text-lg text-white rounded"
                                value="Login"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="my-4">
                        <button className="py-2 px-4  border rounded-md border-emerald-300 bg-emerald-500 text-white hover:bg-sky-600 hover:text-white" onClick={googleAuth}>

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
}

export default Signup