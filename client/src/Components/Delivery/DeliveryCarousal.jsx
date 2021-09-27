import React from 'react'
import Slider from  "react-slick";

//Component
import DeliveryCategory from './DeliveryCategory';
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import {NextArrows, PrevArrows} from "../CarousalArrows";

const DeliveryCarousel = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="PrevArrow" {...props} />
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="PrevArrow" {...props} />
    );
   
        var images = [
            {
                image: "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
                title: "Biryani",
            },
            {
                image:  "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
                title: "Chicken",
            },
            {
                image:  "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
                title: "Chaptai",
            },
            {
                image: "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
                title: "Burger",
            },
            {
                image: "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
                title: "Chaat",
            },
            {
                image:  "https://b.zmtcdn.com/data/dish_images/914402aa1bbe153d735c51a3ba4fe61b1629132873.png",
                title: "Kersari Bath",
            },
    ]
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight/>,
        prevArrow: <SlickArrowLeft />,
      };
      
    return (
        <>
           <div className="bg-gray-50 py-3">
           <h1 className="text-3xl font-semibold mt-10 mb-6 pl-2">Inspiration for your first order</h1>
            <div className="lg:hidden flex gap-3 flex-wrap md:jusify-between">
                {
                    images.map((image) => (
                        <DeliveryCategory {...image}/>
                    ))
                }
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                    {
                        images.map((image) => (
                            <DeliveryCategory {...image} />
                        ))
                    }
                </Slider>
            </div>
           </div>
        </>
    )
};
export default DeliveryCarousel;
