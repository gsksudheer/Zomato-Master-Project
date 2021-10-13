import React, { useState, useEffect } from "react";
import {
    IoMdArrowDropright,
    IoMdArrowDropup,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

//Components
import FoodItem from "./FoodItem";

//Redux actinos
import { getCart } from "../../Redux/Reducer/Cart/Cart.action";

const CartSm = ({toggle}) => {
    const reduxState = useSelector((global) =>  global.cart.cart );
    const history = useHistory();

    const continueToCheckout = () => history.push("/checkout/orders")

    return (
        <>
        <div className="md:hidden flex items-center justify-between container px-2 mx-auto border-t border-gray-100">
            <div className="flex flex-col items-start gap-1 text-md w-full">
                <small className="flex items-center gap-1" onClick={toggle}>
                    {reduxState.length} ITEM <IoMdArrowDropup />
                </small>
                <h4 className="text-lg font-regular">
                    ₹{reduxState.reduce((acc, curVal) => acc.totalPrice + curVal.totalPrice, { totalPrice: 0 } ).totalPrice } <sub>(plus tax)</sub>
                </h4>
            </div>
            <button onClick={continueToCheckout} className="bg-zred-400 text-white text-lg px-6 py-1 rounded-lg flex items-center justify-center gap-2">
                Continue <IoMdArrowDropright />
            </button>
        </div>
        </>
    );
};

const CartLg = ({toggle}) => {
    const reduxState = useSelector((global) =>  global.cart.cart );
    const history = useHistory();

    const continueToCheckout = () => history.push("/checkout/orders")

    return (
        <>
          <div className="hidden md:flex items-center justify-between container lg:px-40 md:px-4 mx-auto">
            <div className="flex  items-center gap-3">
                <span className="border border-gray-200 rounded-sm p-1"><IoMdArrowDropup /></span>
                <h3 onClick={toggle} className="text-lg bg-white font-semibold">Your Order ({reduxState.length})</h3>
            </div>
            <div className="flex items-center gap-4">
                <h4 className="text-lg font-semibold">
                    Subtotal: ₹429.59 
                </h4>
                <button onClick={continueToCheckout} className="bg-zred-400 text-white text-lg px-6 py-1 rounded-lg flex items-center gap-2">
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </div>
        </>
    );
};

const CartConatainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartData, setCartData] = useState();
    const dispatch = useDispatch();
    const reduxState = useSelector((global) =>  global.cart.cart );
   

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
        {reduxState.length && (
            <>
            {isOpen && (
                <div className="fixed bottom-20 md:bottom-16 -my-3 p-3 w-full h-48 overflow-y-scroll bg-white z-10  container px-2 md:px-4 lg:px-40 mx-auto">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Your Orders</h3>
                        <IoCloseSharp onClick={closeCart}/>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex flex-col gap-2">
                    {reduxState.map((food) => {
                        <FoodItem  key={food._id} {...food} />
                    })}
                    </div>
                </div> 
        )}
         <div className="fixed bottom-0 bg-white w-full z-10 p-2 border-t border-gray-100">
            <CartSm toggle={toggleCart}/>
            <CartLg toggle={toggleCart}/>
        </div>
        </>
           
        )}
        </>
    );
};
export default CartConatainer;