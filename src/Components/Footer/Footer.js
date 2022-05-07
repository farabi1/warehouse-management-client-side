import React from "react";
import ItemsSection from "./ItemsSection";
import Icon from "./Icon";


const Footer = () => {
    return (

        <footer className="bg-gray-900 text-white mt-20">
            <ItemsSection />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
            >
                <span>All rights reserved.© 2022 </span>
               
                <Icon/>
            </div>
        </footer>

    );
};

export default Footer;