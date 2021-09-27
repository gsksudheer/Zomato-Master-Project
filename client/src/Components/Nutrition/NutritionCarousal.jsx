import React from 'react'
import Slicker from "react-slick";

//Components
import {NextArrows, PrevArrows } from "../CarousalArrows";
import NutritionCarousalCard from "./NutritionCarousalCard";

const NutritionCarousal = () => {

    const categories = [
        {
        image: "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
        title: "Protien & Fitness",
        },
        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            /* "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp", */
        title: "Sleep & stress",
        },
        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            /* "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp", */
        title: "Digestion & weight Loss",
        },
        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
          /*   "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp", */
        title: "Omegas & CoQ10",
        },
        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
         /*    "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp", */
        title: "Beauty & Skin Care",
        },
        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            /* "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp", */
        title: "Immunity & Bones",
        },
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows />,
      };

    return (
        <>
         <div className="lg:hidden flex gap-3 flex-wrap justify-around mb-30">
             {
                   categories.map((categorie) => (
                       <NutritionCarousalCard {...categorie} />
                   ))
               }
        </div>
        <div className="hidden lg:block">
           <Slicker {...settings}>
               {
                   categories.map((categorie) => (
                       <NutritionCarousalCard {...categorie} />
                   ))
               }
           </Slicker>
        </div>
        </>
    )
}

export default NutritionCarousal;
