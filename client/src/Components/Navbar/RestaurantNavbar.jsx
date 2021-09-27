import React from "react";
import {FaUserAlt} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";


const MobileNavbar = () => {
    return (   
        <div className="fixed shadow-md bg-white flex items-center justify-between px-3 py-2 w-full  lg:hidden">
           <div className="flex gap-2">
                <AiOutlineArrowLeft />
                <div className="w-28 px-2">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className="w-full h-full" />
                </div>
           </div>
            <div className="flex items-center gap-3">
                <button className="bg-zred-400  p-2 text-white rounded-full">Use App</button>
                <span className="border border-gray-500 p-2 text-zred-400  rounded-full">
                    <FaUserAlt />
                </span>
            </div>
        </div>      
    );
};

const PcNavbar = () => {
    return (
        <> 
        <div className="hidden lg:inline container mx-auto px-40 flex items-center pb-4 mt-4">
            <div className="hidden flex items-center bg-white w-full lg:flex">
                <div className="w-28 ">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className="w-full h-full" />
                </div>
                <div className="flex items-center px-3 py-2 w-3/5 shadow-md border border-gray-200 rounded-lg ml-3">
                    <div className="flex items-center gap-3 border-r-2 border-gray-400 px-2 py-1">
                        <span className="text-zred-400 ">
                            <MdLocationOn />
                        </span>
                        <input type="text" placeholder="Hyderbad" className="focus:outline-none" />
                        <MdArrowDropDown />
                    </div>
                    <div className="flex items-center w-full mx-3 px-3">
                        <FiSearch />
                        <input type="text" placeholder="Search for restaurent, cusine or a dish" className="w-full focus:outline-none px-3" />
                    </div>
                </div>
                <div className="flex items-center gap-6 ml-28">
                    <button className="text-gray-400 font-light text-lg text-xl hover:text-gray-800">
                        Login
                    </button>
                    <button className="text-gray-400 font-light text-lg text-xl hover:text-gray-800">
                        Signup
                    </button>        
                </div>
            </div>
            </div>
        </>
    );
};


const RestaurantNavbar = () => {
    return (
         <>
             <nav className="flex w-full bg-white">     
                     <MobileNavbar /> {/* mobile and tablet Navbar */}
                     <PcNavbar /> 
             </nav>            
         </>
    );
 };
export default RestaurantNavbar;