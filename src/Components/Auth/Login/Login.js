import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../Firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const provider = new GoogleAuthProvider();


const Login = () => {
    const navigation = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);





    const onSubmit = data => {

        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);

    };




    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                console.log(user);
                navigation("/");

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    return (
        <div>
            <Header></Header>
            <div className="w-full max-w-md m-auto mt-10 bg-white rounded-lg border shadow-lg">

                <div className="m-6">
                    <div className="flex items-center my-5 justify-center">
                        <h1 className="text-3xl font-bold mt-6 mb-4">
                            Login to your account
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="text-left">Email :</label>
                        <input
                            type="email"
                            placeholder="Type your Email"
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide valid email'
                                }
                            })} />
                        <label className="">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label> <br />

                        <label className="text-left">Password :</label>
                        <input
                            type="password"
                            placeholder="Type your Password"
                            className="w-full p-2 text-primary border-2 rounded-md outline-none text-sm mb-4"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password Required'
                                },
                                minLength: {
                                    value: 5,
                                    message: 'Please provide 5 characters or longer password'
                                }
                            })} />
                        <label className="">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        </label> <br />

                        <input className="bg-teal-500 w-full hover:bg-teal-600 py-1 px-2 text-lg text-white rounded" type="submit" value="Login" />
                    </form>

                    <div className="my-4">
                        <button className="py-2 px-4 w-full border rounded-md border-emerald-300 bg-emerald-500 text-white hover:bg-sky-600 hover:text-white" onClick={googleAuth}>

                            <p className='text-lg font-semibold'>Google Login</p>

                        </button>
                    </div>
                    <div className="flex items-center mt-5">
                        <button className="justify-center ">
                            <p>Don't have an account? <Link className='text-teal-500' to="/signup">Sign Up Here</Link> </p>
                        </button>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;

