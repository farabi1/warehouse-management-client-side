import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const provider = new GoogleAuthProvider();


const Login = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState(true)

    const [userInfo, setUserInfo] = useState({
        email: '',
        passwoed: ''
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [loginUser, loginloading, loginerror] = useAuthState(auth);


    const handleForInput = (event) => {

        userInfo[event.target.name] = event.target.value;
    }

    const navigation = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    if (loginUser) {
        navigation(from, { replace: true });
    }

    const handlelogin = (event) => {
        event.preventDefault();

        console.log(userInfo);
    }

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
                    <form onSubmit={handlelogin}  >
                        <label className="text-left">Email :</label>
                        <input
                            onBlur={(event) => handleForInput(event)}
                            type='text' name='email' id='inputemail'
                            className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"

                        />

                        <label className="">Password :</label>
                        <input
                            onBlur={(event) => handleForInput(event)}
                            type='password'
                            name='password'
                            id='inputpassword'
                            className="w-full p-2 text-primary border-2 rounded-md outline-none text-sm mb-4"

                        />

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
    );
};

export default Login;