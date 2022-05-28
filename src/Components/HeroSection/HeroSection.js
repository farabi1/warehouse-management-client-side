import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-2 my-6 bg-gray-200 '>
            <div className="flex justify-center items-center">
                <div className="">
                    <h1 className=" text-teal-800 font-bold text-4xl shadow-lg p-2 rounded-md" to='/'>FR WareHouse Ltd.</h1>
                    <p className=" font-bold text-2xl p-2 my-5 rounded-md">Let's Collect your favourite clothes direct from <span className='text-teal-500'>FR warehouse</span> </p>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 px-3 py-2 rounded-lg text-lg font-bold '>Explore</button>
                </div>
            </div>
            <div className="">
                <img src="https://i.ibb.co/xY3w4Bg/horizontal-banner.jpg" alt="Cloth WareHouse" />
            </div>
        </div>
    );
};

export default HeroSection;