import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
const CheckoutNavbar = () => {
    return (
        <>
            <nav className="w-full bg-white shadow-md bg-white px-3 py-2">
                <div className="w-full flex items-center justify-between gap-5">
                    <div className="w-1/2 flex items-center justify-between gap-2">
                        <AiOutlineArrowLeft />
                        <div className="w-28 px-2">
                            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mx-2">
                        <span className="border border-zred-300 p-2 text-zred-400 rounded-full">
                            <FaUserAlt />
                        </span>
                        gsksudheer
                    </div>       
                </div>        
             </nav> 
        </>
    );
};

export default CheckoutNavbar;