import React from 'react';
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

const RestaurantLayout = (props) => {
    return (
        <>
            <RestaurantNavbar />
            <div className="border-b-2 border-gray-400 mb-0 "/>
            <div className="container w-full mx-auto px-3 md:px-4 lg:px-40">
                <ImageGrid 
                className="-px-3"
                images={[
                    "https://b.zmtcdn.com/data/pictures/1/47211/7398da37ab73c4c7cb16ac860e577369.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/1/47211/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg?fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/1/47211/346447036c0c9839ee54aa34fcab3fa7.jpg?fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/1/47211/2781ab2c532b711ecd401571cdd87eb9.jpg?fit=around|300:273&crop=300:273;*,*",
                    "https://www.zomato.com/mumbai/dominos-pizza-matunga-west/order",
                ]}/>    

                <Restaurantinfo name="Domino's Pizza" restaurantRating="4.2" deliveryRating="5.0" cusine="Pizza, Fast Food, Desserts, Beverages" address="Matunga West, Mumbai" />
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
