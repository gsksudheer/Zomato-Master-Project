import React, { useState } from "react";
import {
    IoMdArrowDropdown,
    IoMdArrowDropright,
    IoMdArrowDropup,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

//Components
import FoodItem from "./FoodItem";

const CartSm = ({toggle}) => {
    return (
        <>
        <div className="md:hidden flex items-center justify-between container px-2 mx-auto border-t border-gray-100">
            <div className="flex flex-col items-start gap-1 text-md w-full">
                <small className="flex items-center gap-1" onClick={toggle}>
                    1 ITEM <IoMdArrowDropup />
                </small>
                <h4 className="text-lg font-regular">
                    ₹429.59 <sub>(plus tax)</sub>
                </h4>
            </div>
            <button className="bg-zred-400 text-white text-lg px-6 py-1 rounded-lg flex items-center justify-center gap-2">
                Continue <IoMdArrowDropright />
            </button>
        </div>
        </>
    );
};

const CartLg = ({toggle}) => {
    return (
        <>
          <div className="hidden md:flex items-center justify-between container lg:px-40 md:px-4 mx-auto">
            <div className="flex  items-center gap-3">
                <span className="border border-gray-200 rounded-sm p-1"><IoMdArrowDropup /></span>
                <h3 onClick={toggle} className="text-lg bg-white font-semibold">Your Order (1)</h3>
            </div>
            <div className="flex items-center gap-4">
                <h4 className="text-lg font-semibold">
                    Subtotal: ₹429.59 
                </h4>
                <button className="bg-zred-400 text-white text-lg px-6 py-1 rounded-lg flex items-center gap-2">
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </div>
        </>
    );
};

const CartConatainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
        {isOpen && (
            <div className="fixed bottom-20 md:bottom-16 -my-3 p-3 w-full h-48 overflow-y-scroll bg-white z-10  container px-2 md:px-4 lg:px-40 mx-auto">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Your Orders</h3>
                    <IoCloseSharp onClick={closeCart}/>
                </div>
                <hr className="my-2"/>
                <div className="flex flex-col gap-2">
                    <FoodItem name="chees n restaurant" quantitiy={2} price={234}/>
                    <FoodItem name="chees n restaurant" quantitiy="3" price="343"/>
                    <FoodItem name="chees n restaurant" quantitiy="3" price="343"/>
                    <FoodItem name="chees n restaurant" quantitiy="3" price="343"/>
                    <FoodItem name="chees n restaurant" quantitiy="3" price="343"/>
                </div>
        </div> 
        )

        }
         <div className="fixed bottom-0 bg-white w-full z-10 p-2 border-t border-gray-100">
            <CartSm toggle={toggleCart}/>
            <CartLg toggle={toggleCart}/>
        </div>
        </>
    );
};
export default CartConatainer;