import React, { useState, useEffect } from "react";
import { GoStar } from "react-icons/go";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import { getUser } from "../../../Redux/Reducer/User/user.action";

const ReviewCard  = (props) => {
    const [user, setUser] = useState("");
    const dispatch = useDispatch();

    useEffect(getUser(props.user)).then((data) => {
        setUser(data.payload.user.fullname);
    }, []);
    return (
        <>
        <div className="my-4 flex flex-col gap-4 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12">
                        <img src="https://b.zmtcdn.com/data/user_profile_pictures/68f/92adfea76c11ff2a7999472c9d5ed68f.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                         alt="avatar"
                         className="w-full h-full rounded-full"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h5 className="text-lg font-semibold">{user}</h5>
                        <h6 className="text-md text-gray-500">43 reviews &bull; 17 Followers</h6>
                    </div>
                </div>                
                <button className="px-4 py-1 text-lg text-zred-500 border border-zred-500 rounded-lg hover:border-zred-600 hover:text-z-red-600 hover:bg-red-50">Follow</button>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 bg-zred-600 px-1 text-white rounded-lg">4 <GoStar /></span>
                    <h5  className="text-md font-regular">{props.isRestaurantReview ? "Dinning" : "Delivery" }</h5>
                    <small className="text-gray-500">{dayjs(props.createdAt).format("DD MM YYYY")} days ago</small>
                </div>
                <div>
                    <p className="text-gray-600">{props.reviewText}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ReviewCard;
