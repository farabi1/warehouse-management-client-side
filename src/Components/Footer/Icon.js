import React from "react";
import { FaFacebook,FaTwitter } from 'react-icons/fa';
import {CgMail } from 'react-icons/cg';

const Icon = () => {
    return (
        <div className="text-teal-400">
            <div className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-800 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-700
        duration-200 ">
            <div><FaFacebook></FaFacebook></div>           
            </div>
            <div className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-800 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-700
        duration-200 ">
            <div><CgMail></CgMail></div>           
            </div>
            <div className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-800 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-700
        duration-200 ">
            <div><FaTwitter></FaTwitter></div>           
            </div>
        </div>
    );
};

export default Icon;