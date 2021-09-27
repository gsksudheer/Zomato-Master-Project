import React from 'react';
import { GoStar } from "react-icons/go";

const Restaurantinfo = (props) => {
    return (
        <>
             <div className="flex flex-col gap-3">
                <div className="flex flex-col flex-col-reverse md:flex-row md:items-center gap-3 justify-between mt-2">
                    <div>
                        <h1 className="text-xl md:text-3xl font-semibold md-font-bold">{props.name}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="flex flex-row items-center text-white bg-green-800 px-1 rounded-md">
                                    <h3 className="text-lg">{props.restaurantRating}</h3>
                                    <GoStar />
                            </span>
                            <span className="border-b">
                                <strong>2</strong>
                                <p className="text-sm text-gray-900">Dinning Reviews</p>
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex flex-row items-center text-white bg-green-800 px-1 rounded-md">
                                    <h3 className="text-lg">{props.deliveryRating}</h3>
                                    <GoStar />
                            </span>
                            <span className="border-b">
                                <strong>2</strong>
                                <p className="text-sm text-gray-900">Delivery Reviews</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-lg">
                    <h3 className="text-gray-700">{props.cusine}</h3>
                    <h3 className="text-gray-300">{props.address}</h3>
                    <p  className="text-gray-500"><span className="text-yellow-500 mr-1">Open Now </span>10am – 12midnight (Today)</p>
                </div>
            </div>    
        </>
    )
}

export default Restaurantinfo;
