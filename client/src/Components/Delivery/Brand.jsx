import React from "react";
import Slider from "react-slick";
//Components
import {NextArrows, PrevArrows} from "../CarousalArrows";

const Brand = () => {
    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
      ];
      const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows />,
       responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          }
        ] 

      };
      return (
        <div className="my-10 sm:my-20">
            <h1 className="text-3xl font-semibold mb-6">Top brands in spotlight</h1>
            <Slider {...settings}>
            {
                logos.map((logo) => (
                   <div className="">
                      <div className="w-36 sm:hidden h-42 mx-10 border border-gray-200 rounded-lg bg-white shadow">
                        <img src={logo} alt="Logo" className="w-full h-full" />
                      </div>
                    </div>
                ))
            }     
            </Slider>         
        </div>                     
      );
};
export default Brand;