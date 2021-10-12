import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CheckoutNavbar = () => {
    const reduxState = useSelector((globalStore) => global.user.user);

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
                    <div className="border border-gray-500 p-2 text-zred-400 w-20 h-20 rounded-full">
                       <img 
                        src={gravatar.url(reduxState?.user?.email)}
                        alt={reduxState?.user?.email}
                        className="w-full h-full rounded-full object-cover"
                       />
                    </div>
                        {reduxState?.user?.fullname}
                    </div>       
                </div>        
             </nav> 
        </>
    );
};

export default CheckoutNavbar;