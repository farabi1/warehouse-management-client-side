import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';
import { AiOutlineExclamationCircle } from "react-icons/ai";


const provider = new GoogleAuthProvider();

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                console.log(user);
                navigate("/");

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
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

        setPassword({ value: passwordInput, error: "" });
    };

    const handleLogin = (event) => {
        event.preventDefault();

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }

        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }

        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/");
                })
                .catch((error) => {
                    const errorMessage = error.message;

                    if (errorMessage.includes("wrong-password")) {
                        toast.error("Wrong Password", { id: "error" });
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
                            Login to your account
                        </h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <label className="text-left">Email :</label>
                        <input
                            type='text' name='email' onBlur={handleEmail} id='email'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                        />
                        {email.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {email.error}
                            </p>
                        )}
                        <label className="">Password :</label>
                        <input
                            type='password'
                            onBlur={handlePassword}
                            name='password'
                            id='password'
                            className="w-full p-2 text-primary border-2 rounded-md outline-none text-sm mb-4"

                        />
                        {password.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {password.error}
                            </p>
                        )}
                        <div className="flex items-center mt-3 justify-start">
                            <button
                                className="bg-teal-500 hover:bg-teal-600 py-1 px-2 text-lg text-white rounded"
                                value="Login"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="my-4">
                        <button className="py-2 px-4  border rounded-md border-emerald-300 bg-emerald-500 text-white hover:bg-sky-600 hover:text-white" onClick={googleAuth}>

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
    )
}

export default Login