import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

//Components
import MenuListContainer from "./MenuListContainer";

const FloatMenuButton = () => {
    const [isClicked, setIsClicked ] = useState(false);
    const toggleMenu = () => setIsClicked((prev) => !prev);
    return (
        <>
            <div className="fixed z-30 bottom-2 right-2 w-8/12 md:hidden flex flex-col items-end gap-3">
               {
                   isClicked && (
                    <div className=" bg-white h-48 p-3 overflow-y-scroll">
                    <MenuListContainer />
                </div>
                )}
                <button onClick={toggleMenu} className="bg-black text-white flex items-center gap-2 px-3 py-2 rounded-full md:hidden">
                   {isClicked ? <MdClose /> :  <HiMenu />}Menu
                </button>
            </div>
        </>
    );
};

export default FloatMenuButton;
