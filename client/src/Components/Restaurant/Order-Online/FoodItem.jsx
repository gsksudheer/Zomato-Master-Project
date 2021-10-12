import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { BsImages, BsPlus } from "react-icons/bs";

//Redux action
import { getFood } from "../../../Redux/Reducer/Food/Food.action";
import { getImage } from "../../../Redux/Reducer/Image/Image.action";
import { addCart } from '../../../Redux/Reducer/Cart/Cart.action';

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
            });
        });
    }, []);

    const addFoodToCart = () => {
        dispatch(addCart({ ...food, quantity: 1, totalPrice: food.price }));
        setFood((prev) => ({ ...prev, isAddedToCart: true}));
    };
    return (
        <>
        {food?.name && (
        <div className="flex items-start gap-2 ">
          {food?.image && (
            <div className="w-3/12 h-24 md:h-28 lg:h-36  md:px-3">
              <img
                src={food?.image}
                alt="food"
                className="w-full h-full rounded-lg"
              />
            </div>
          )}
          <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{food?.name}</h3>
              <button
                onClick={addFoodToCart}
                disabled={food.isAddedToCart}
                className=" md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
              >
                {food.isAddedToCart ? (
                  "Added"
                ) : (
                  <>
                    <AiOutlinePlus /> Add
                  </>
                )}
              </button>
            </div>
            <ReactStars count={5} value={food?.rating || 0} />
            <h5>₹{food?.price}</h5>
            <p className="truncate">{food?.descript}</p>
          </div>
          <div className="hidden md:block w-2/12	">
            <button
              onClick={addFoodToCart}
              disabled={food.isAddedToCart}
              className=" flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-2 rounded-lg"
            >
              {food.isAddedToCart ? (
                "Added"
              ) : (
                <>
                  <AiOutlinePlus /> Add
                </>
              )}
            </button>
          </div>
        </div>
      )}




        {/* {food?.name && (
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
        )} */}
        </>
    );
};

export default FoodItem;
