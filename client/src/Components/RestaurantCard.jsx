import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";
const RestaurantCard = (props) => {
    
    return (
        <>
          <div className="bg-white p-3 w-full lg:w-1/3 md:w-1/3  rounded-2xl hover:shadow-lg tranition duration-700 ease-in-out hover:border hover:border-red-200 hover:rounded-lg">
            <div className="w-full h-56 lg:h-64 relative">
               <div className="absolute bottom-2 w-full flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-2 items-start">
                        {props.isPro && (
                            <span className="bg-zred-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
                        )}
                       {props.isOff && (
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹{`${props.isOff}`} OFF</span>
                       )}
                    </div>
                    <span className="bg-white px-1 rounded bg-opacity-80 mr-3 ">{props.duriationOfDelivery}min</span>
               </div>

                <img src={ props.photos.length && props.photos[0] }
                alt="Food.."
                className="w-full h-full rounded-md"
                />
            </div> 
            <div className="flex flex-col gap-2 my-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium ">{props.name}</h3>
                    <span className="bg-green-600 text-white text-sm px-1 flex items-center rounded">
                      {props.restaurantReviewValue} <AiTwotoneStar/>
                    </span>
                  </div>
              <div className="flex items-center justify-between text-gray-500 ">
                 <p >{props.cuisine.join(", ")}</p>
                 <p> ₹{props.averageCost} for one</p>
              </div>
            </div>
        </div> 
        </>
    );
};

export default RestaurantCard;
