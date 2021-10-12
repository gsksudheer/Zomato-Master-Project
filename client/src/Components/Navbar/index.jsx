import React, { useState } from "react";
import {FaUserAlt} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import gravatar from "gravatar";
import { Dispatch } from "react";

//Components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

//Redux action
import { signOut } from "../../Redux/Reducer/Auth/Auth.action";
import { SIGNOUT } from "../../Redux/Reducer/Auth/Auth.type";

const MobileNavbar = ({ SignIn, SignUp }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const reduxState = useSelector((globalStore) => global.user.user);

    const signOutHandler = () => dispatch(signOut());
    return (   
        <div className="fixed shadow-md bg-white flex items-center justify-between px-3 py-2 w-full  lg:hidden">
            <div className="w-28 px-2">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3 relative">
                <button className="bg-zred-400  p-2 text-white rounded-full">Use App</button>
                   {reduxState?.user?.fullname ? (
                   <>
                    <div onClick={() => setIsDropdownOpen((prev)=> !prev)} className="border border-gray-500 p-2 text-zred-400 w-20 h-20 rounded-full">
                       <img 
                        src={gravatar.url(reduxState?.user?.email)}
                        alt={reduxState?.user?.email}
                        className="w-full h-full rounded-full object-cover"
                       />
                    </div>
                   {isDropdownOpen && (
                    <div className="absolute flex flex-col gap-2 bg-white shadow-xl py-2 my-1 w-full top-12 -right-3 text-md">
                        <button onClick={signOutHandler}>Sign Out</button>                       
                    </div>
                   )}
                   </>
                   ) : (
                   <>
                    <span onClick={() => setIsDropdownOpen((prev)=> !prev)} className="border border-gray-500 p-2 text-zred-400  rounded-full">
                        <FaUserAlt />
                    </span>
                   {isDropdownOpen && (
                    <div className="absolute flex flex-col gap-2 bg-white shadow-xl py-2 my-1 w-full top-12 -right-3 text-md">
                        <button onClick={SignIn}>Sign In</button>
                        <button onClick={SignUp}>Sign Up</button>                       
                    </div>
                   )}
                   </>)

                   }
            </div>
        </div>      
    );
};

const PcNavbar = ({ SignIn, SignUp }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const dispatch = useDispatch();
    const reduxState = useSelector((globalStore) => global.user.user);
    
    const signOutHandler = dispatch(signOut());

    return (
        <> 
        <div className="hidden lg:inline container mx-auto px-40 flex items-center pt-3 pb-4">
            <div className="hidden flex items-center bg-white w-full lg:flex">
                <div className="w-28 px">
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
                {reduxState?.user?.fullname ? (
                     <>
                        <div onClick={() => setIsDropdownOpen((prev)=> !prev)} className="border border-gray-500 p-2 text-zred-400 w-20 h-20 rounded-full">
                            <img 
                            src={gravatar.url(reduxState?.user?.email)}
                            alt={reduxState?.user?.email}
                            className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute flex flex-col gap-2 bg-white shadow-xl py-2 my-1 w-full top-12 -right-3 text-md">
                                <button onClick={signOutHandler}>Sign Out</button>                       
                            </div>
                        )}
                    </>
                ) : (
                    <>
                     <div className="flex items-center gap-6 ml-28">
                        <button onClick={SignIn} className="text-gray-400 font-light text-lg text-xl hover:text-gray-800">
                           Login
                        </button>
                        <button onClick={SignUp} className="text-gray-400 font-light text-lg text-xl hover:text-gray-800">
                            Signup
                        </button>        
                     </div>
                    </>
                )
                }
            </div>
            </div>
        </>
    );
};

const Navbar = () => {
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    const openSignInModal = () => setOpenSignIn(true);
    const openSignUpModal = () => setOpenSignUp(true);
    return (
         <>
            <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
            <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />
            <nav className="flex w-full bg-white">     
                <MobileNavbar SignIn={ openSignInModal } SignUp={ openSignUpModal }/> {/* mobile and tablet Navbar */}
                <PcNavbar SignIn={ openSignInModal } SignUp={ openSignUpModal } /> 
            </nav>            
         </>
    );
 };
export default Navbar;
