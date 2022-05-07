import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Login() {
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
                        <button className="py-2 px-4  border rounded-md border-emerald-300 bg-emerald-500 text-white hover:bg-sky-600 hover:text-white">

                            <p className='text-lg font-semibold '>Google Login</p>

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