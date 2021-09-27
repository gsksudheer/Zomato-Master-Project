import React from 'react'
import Slicker from "react-slick";

//Components
import { NextArrows, PrevArrows } from '../CarousalArrows';
import PictureCarousalCard from '../PictureCarousalCard';

const NightLifeCarousal = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div >
               <Slicker {...settings}>
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                </Slicker>
            </div>    
        </>
    )
}

export default NightLifeCarousal;
