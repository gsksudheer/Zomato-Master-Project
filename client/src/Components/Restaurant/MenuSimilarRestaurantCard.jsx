import React from 'react';
import { GoStar } from "react-icons/go";

const MenuSimilarRestaurantCard = (props) => {
    return (
        <>
        <div className="my-2">
            <div className="bg-white shadow rounded-md  w-38 md:w-58 lg::w-80 flex flex-col ml-3 ">
                <div className="w-full h-48">
                    <img src={props.image} alt="" className="w-full h-full object-cover rounded-t-md" />                    
                </div>
                <div className="flex flex-col gap-2 lg:p-3">
                    <h3 className="font-semibold py-1">{props.title}</h3>
                    <div className="flex items-center justify-between text-sm pr-1">
                        <span className="flex items-center gap-1">
                            <span className="flex items-center  text-white bg-green-600 rounded px-1 py-1">
                                3.2
                                <GoStar />
                            </span>
                            DINNING
                        </span>
                        <span className="w-2 h-6 border-r border-gray-500 md:mx-2"/>
                        <span className="flex items-center gap-1">
                            <span className="flex items-center  text-white bg-green-600 rounded px-1 py-1">
                                4.4
                                <GoStar />
                            </span>
                            DELIVERY
                        </span>
                    </div>
                    <h4 className="text-gray-600">Chinese, Thai, Vietnamese</h4>
                </div>
            </div>  
        </div>
        </>     
    );
};

export default MenuSimilarRestaurantCard;
