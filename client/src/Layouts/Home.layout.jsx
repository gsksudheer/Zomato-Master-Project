import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

//Redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    }, []);
    return (
        <>
            <Navbar /> 
            <FoodTab />
           <div className="constainer mx-auto lg:px-40">  
                {props.children}
           </div>  
        </>
    );
};

export default HomeLayout;