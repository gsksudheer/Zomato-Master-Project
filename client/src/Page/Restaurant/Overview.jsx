import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io'; 
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";


//Components    
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import { NextArrows, PrevArrows } from '../../Components/CarousalArrows';
import ReviewCard from '../../Components/Restaurant/Reviews/reviewCard';
import MapView from '../../Components/Restaurant/MapView';

const Overview = () => {
    const { id } = useParams();

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows />,
      };
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <>
            <div className="flex flex-col md:flex-row mb-10">
                <div className="w-full md:w-2/3 relative">
                   <h3 className="text-2xl font-semibold mb-5">About this place</h3>
                   <div className="my-10">
                       <div className="flex items-center justify-between">
                           <h2 className="text-2xl mb-4">Menu</h2>
                           <Link to={`/restaurant/${id}/menu`}>
                                <span className="flex items-center gap-1 text-zred-500 cursor-pointer">
                                    <p>See all menus</p>
                                    <IoMdArrowDropright />
                                </span>
                           </Link>
                       </div>
                      <div className="flex flex-wrap gap-3">
                      <MenuCollection image={[
                          "https://b.zmtcdn.com/data/menus/423/18387423/b75c0e2003dac80722be174d161c96fc.jpg",
                          "https://b.zmtcdn.com/data/menus/423/18387423/b75c0e2003dac80722be174d161c96fc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                          "https://b.zmtcdn.com/data/menus/423/18387423/b75c0e2003dac80722be174d161c96fc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                      ]}
                      title="items" pages="2"
                      />
                      <MenuCollection image={"https://b.zmtcdn.com/data/menus/423/18387423/b75c0e2003dac80722be174d161c96fc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"} title={"items"} pages={"2"}/>
                     
                      </div>
                    </div>
                    <div className="md:hidden w-full flex flex-col gap3">
                        <MapView phno="+919856741236" mapLocation={[12.988134202889283, 77.59405893120281]} title="Mumbai Xpress" address="15, sigma Center Mall, Vasanth Nagar, Cunninghamroad, Banglore " />
                    </div>
                   <div className="my-6">
                       <h2 className="text-2xl mb-4">Average Cost</h2>
                       <div className="flex flex-wrap gap-6">
                            <h5 className="text-blue-600 px-3 py-2 border rounded-full">Pizza</h5>
                            <h5 className="text-blue-600 px-3 py-2 border rounded-full">Desserts</h5>
                       </div>
                   </div>
                   <div className="my-4">
                        <h2 className="text-2xl mb-2">Cuisines</h2>
                        <h5>₹350 for one order (approx.)</h5>
                        <small className="text-gray-400">Exclusive of applicable taxes and charges, if any</small>
                   </div>
                   <div className="my-4">
                        <h2 className="text-2xl mb-2">Similar Restaurants</h2>
                       <div className="my-4">
                         <Slider {...settings}>
                                <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                                <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                                <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                                <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                                <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                            </Slider>
                       </div>
                   </div>
                   <div className="my-4">
                      <h2 className="text-2xl mb-4">Rate your delivery experience</h2>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4  border-t border-gray-100 py-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>  
                </div>
                <aside style={{height:"fit-content"}} className="hidden md:block w-1/3 h-20 bg-white rounded-lg px-4 py-5 shadow-xl">
                  <MapView phno="+919856741236" mapLocation={[12.988134202889283, 77.59405893120281]} title="Mumbai Xpress" address="15, sigma Center Mall, Vasanth Nagar, Cunninghamroad, Banglore " />
                </aside>
            </div>
        </>
    );
};

export default Overview;
