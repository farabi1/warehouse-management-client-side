import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';
import toast from "react-hot-toast";


const provider = new GoogleAuthProvider();

function Signup() {

    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: "",
        error: "",
    });

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

    const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    };
    const handlePassword = (event) => {
        const passwordInput = event.target.value;

        if (passwordInput.length < 7) {
            setPassword({ value: "", error: "Password too short" });
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            setPassword({
                value: "",
                error: "Password must contain a capital letter",
            });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }
    };
    const handleConfirmPassword = (event) => {
        const confirmationInput = event.target.value;

        if (confirmationInput !== password.value) {
            setPasswordConfirmation({ value: "", error: "Password Mismatched" });
        } else {
            setPasswordConfirmation({ value: confirmationInput, error: "" });
        }
    };

    const handleSignup = (event) => {
        event.preventDefault();
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }
        if (passwordConfirmation.value === "") {
            setPasswordConfirmation({
                value: "",
                error: "Password confirmation is required",
            });
        }
        if (email.value && password.value === passwordConfirmation.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success("Account created", { id: "created" });
                    navigate("/");
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    if (errorMessage.includes("already-in-use")) {
                        toast.error("Email already in use", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }
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

                    <form onSubmit={handleSignup}>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input
                                    onBlur={handleEmail}
                                    type='email'
                                    name='email'
                                    id='email'
                                />
                            </div>

                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <input
                                    onBlur={handlePassword}
                                    type='password'
                                    name='password'
                                    id='password'
                                />
                            </div>
                         
                        </div>
                        <div className='input-field'>
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <div className='input-wrapper'>
                                <input
                                    onBlur={handleConfirmPassword}
                                    type='password'
                                    name='confirmPassword'
                                    id='confirm-password'
                                />
                            </div>
                         
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Sign Up
                        </button>
                    </form>






























                    {/* <form onSubmit={handleSignup}>

                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input
                                    onBlur={handleEmail}
                                    type='email'
                                    name='email'
                                    id='email'
                                />
                            </div>
                        </div>
                        <div className="">
                            <label className="text-left">Email :</label>
                            <input
                                name='email'
                                type='email'
                                id='email'
                                placeholder='email'
                                className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                            />
                        </div>
                        <div className="">
                            <label className="text-left">Email :</label>
                            <input
                                name='email'
                                type='email'
                                id='email'
                                placeholder='email'
                                className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                            />
                        </div>

                        <div className="flex items-center mt-3 justify-start">
                            <button type='submit'
                                className="bg-teal-500 hover:bg-teal-600 py-1 px-2 text-lg text-white rounded"
                                value="Login"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form> */}

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