import React, {useState} from 'react'

//Component
import DeliveryCarousel from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123123",
            photos: [
                "https://b.zmtcdn.com/data/pictures/6/19257266/f00da77a93539279c09b60992357afeb_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Magnolia Bakery",
            cuisine: ["Bakery", "Desserts"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.2,
        },
        {
            _id: "123124",
            photos: [
                "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "FreshMenu",
            cuisine: ["Continental", "North Indian", "Biryani"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue:3.8,
        },
        {
            _id: "123123",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Chai Point",
            cuisine: ["Tea", "North Indian", "Fast Food", "Street Food", "Beverages"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue:4.3,
        },
        {
            _id: "123123",
            photos: [
                "https://b.zmtcdn.com/data/pictures/6/19257266/f00da77a93539279c09b60992357afeb_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Magnolia Bakery",
            cuisine: ["Bakery", "Desserts"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.2,
        },
        {
            _id: "123124",
            photos: [
                "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "FreshMenu",
            cuisine: ["Continental", "North Indian", "Biryani"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue:3.8,
        },
        {
            _id: "123123",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Chai Point",
            cuisine: ["Tea", "North Indian", "Fast Food", "Street Food", "Beverages"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue:4.3,
        },
    ])

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
