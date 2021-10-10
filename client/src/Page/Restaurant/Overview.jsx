import React, { useState, useEffect } from 'react';
import { IoMdArrowDropright } from 'react-icons/io'; 
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { useSelector, useDispatch } from 'react-redux';

//Components    
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import { NextArrows, PrevArrows } from '../../Components/CarousalArrows';
import ReviewCard from '../../Components/Restaurant/Reviews/reviewCard';
import MapView from '../../Components/Restaurant/MapView';

//Redux action
import { getImage } from '../../Redux/Reducer/Image/Image.action';
import { getReviews } from '../../Redux/Reducer/Reviews/review.action';


const Overview = () => {
    const [menuImage, setMenuImage] = useState({ image: [],  })
    const [Reviews, setReviews] = useState([])
    const { id } = useParams();

    const reduxState = useSelector((globalStore) => 
        globalStore.restaurant.selectedRestaurant.restaurant
    );

    const dispatch = useDispatch();
    useEffect(() => {
       if(reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => {
                    images.push(location)
                });
                setMenuImage(data.payload.image);
            });
            dispatch(getReviews(reduxState?._id)).then((data) => {
                setReviews(data.payload.reviews);
            });
       }
    }, []);
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

      const getLatiLong = (mapAddress) => {
          return mapAddress?.split(",").map((item) => parseFloat(item));
      }
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
                      <MenuCollection
                      image={menuImage}
                      title="items" pages="2"
                      />                     
                      </div>
                    </div>
                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        {reduxState?.cuisine.map((data) => (
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                                {data}
                            </span>
                        ))}
                    </div>
                    <div className="md:hidden w-full flex flex-col gap3">
                        <MapView 
                            phno={`+91${reduxState?.contactNumber}`}
                            mapLocation={getLatiLong(reduxState?.mapLocation)} 
                            title={reduxState?.name}
                            address={reduxState?.address}
                        />
                    </div>
                   <div className="my-6">
                       <h2 className="text-2xl mb-4">Average Cost</h2>
                       <div className="flex flex-wrap gap-6">
                            <h5 className="text-blue-600 px-3 py-2 border rounded-full">Pizza</h5>
                            <h5 className="text-blue-600 px-3 py-2 border rounded-full">Desserts</h5>
                       </div>
                   </div>
                   <div className="my-4">
                        <h2 className="text-2xl mb-2">Average Cost</h2>
                        <h5>₹{reduxState?.averageCost} for one order (approx.)</h5>
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
                        {Reviews.map((reviewData) => {
                            <ReviewCard {...reviewData} />
                        })}
                    </div>  
                </div>
                <aside style={{height:"fit-content"}} className="hidden md:block w-1/3 h-20 bg-white rounded-lg px-4 py-5 shadow-xl">
                    <MapView 
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatiLong(reduxState?.mapLocation)} 
                        title={reduxState?.name}
                        address={reduxState?.address}
                    />
                </aside>
            </div>
        </>
    );
};

export default Overview;
