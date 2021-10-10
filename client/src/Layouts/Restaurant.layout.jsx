import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { BiStar, BiBookmarkPlus } from "react-icons/bi";
import { MdDirections } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";

//Components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import Restaurantinfo from '../Components/Restaurant/Restaurantinfo';
import InfoButtons from "../Components/Restaurant/InfoButtons";
import TabsContainer from "../Components/Restaurant/Tabs";
import CartConatainer from '../Components/Cart/CartContainer';

//Redux actions
import { getSpecificRestaurant } from '../Redux/Reducer/restaurant/restaurant.action';
import { getImage } from '../Redux/Reducer/Image/Image.action';
const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({
        images: [], 
        name: "", 
        cusine: "", 
        address: ""
    });
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            setRestaurant((prev) => ({
                ...prev,
                ...data.payload.restaurant,
            }));
            dispatch(getImage(data.payload.restaurant.photos)).then((data) =>
                setRestaurant((prev) => ({...prev, ...data.payload.image}))
                );
        });
    }, []);
    return (
        <>
            <RestaurantNavbar />
            <div className="border-b-2 border-gray-400 mb-0"/>
            <div className="container w-full mx-auto px-3 md:px-4 lg:px-40">
                <ImageGrid 
                    className="-px-3"
                    images={restaurant.images}
                />    

                <Restaurantinfo
                    name={restaurant?.name}
                    restaurantRating={restaurant?.rating || 0 }
                    deliveryRating={restaurant?.rating || 0 }
                    cusine={restaurant?.cusine}
                    address={restaurant?.address}
                />
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isAcitve>
                        <BiStar />Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <MdDirections />Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus />Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine />Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabsContainer></TabsContainer>
                </div>
               {props.children}
            </div> 
                <CartConatainer />
        </>
    );
};

export default RestaurantLayout;
