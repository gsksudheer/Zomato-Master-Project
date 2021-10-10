import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { BsImages, BsPlus } from "react-icons/bs";

//Redux action
import { getFood } from "../../../Redux/Reducer/Food/Food.action";
import { getImage } from "../../../Redux/Reducer/Image/Image.action";

const FoodItem = (props) => {
    const [food, setFood] = useState();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFood(props._id)).then((data) => {
            setFood(data.payload.foods)
            dispatch(getImage(data.payloadfoods.photos)).then((data) => {
                const { images } = data.payload.image;
                images.length &&
                setFood((prev) => ({ ...prev, image: images[0].location }))
            })
        })
    }, [])
    return (
        <>
        {food?.name && (
        <div className="flex items-start justify-between gap-5 md:gap-6 w-60 md:w-full">
            <div className="flex flex-row gap-1 md:gap-4">
                {food?.image && (
                    <div className="w-30 h-30 md:w-46 md:h-46">
                        <img src={food?.image} alt="Food" className="w-full h-full rounded-lg" />
                    </div>
                )}
                <div className="md:truncate flex flex-col md:gap-1 w-full">
                    <h3 className="text-gray-900 text-md md:text-lg font-semibold">{food?.name}</h3>
                    <ReactStars count={5} value={food?.rating || 0} />
                    <h4 className="text-gray-900 md:text-lg  ">₹{food?.price}</h4>
                    <p className="text-gray-400 w-60 md:w-96 truncate">{food?.descript}</p>
                </div>
            </div>
            <div>
                <button className="flex items-start gap-2 text-zred-400 bg-pink-50 pl-4 pr-1 py-1 border border-zred-400 rounded-lg">
                    Add <BsPlus />
                </button>
            </div>
        </div>
        )}
        </>
    );
};

export default FoodItem;
