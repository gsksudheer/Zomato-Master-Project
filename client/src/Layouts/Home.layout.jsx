import React from "react";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
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