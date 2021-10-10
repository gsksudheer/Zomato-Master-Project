import React, { useState, useEffect} from 'react'
import { useSelector } from "react-redux";

//Component
import DeliveryCarousel from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);
    
    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants)
    }, [reduxState.restaurants]);
    return (
        <>
           <div>               
                <DeliveryCarousel />
                <div className="hidden">
                <Brand />
                </div>
                <h1 className="text-3xl font-semibold mt-10">Best Food in Mumbai</h1>
                <div className="flex flex-wrap sm:gap md:gap items-center justify-center mt-10">
                    {
                        restaurantList.map((restaurant) => (
                            <RestaurantCard  {...restaurant} key={restaurant._id} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Delivery;
