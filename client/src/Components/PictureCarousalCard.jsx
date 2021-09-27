import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarousalCard = () => {
    return (
        <>
            <div className="px-6 relative overflow-hidden">
                <div className="w-full h-80 relative">
                    <img src="https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp" 
                    alt=""
                    className="w-full h-full rounded-md " />
                    <div className="w-full h-full absolute inset-0 rounded-lg"
                     style={{background: "linear-gradient( 0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"
                     }}/>               
                </div>
                <div className="absolute left-8 bottom-2 text-white">
                    <h4>special</h4>
                    <h6 className="flex items-center justify-center">14 Places <IoMdArrowDropright /></h6>
                </div>
            </div>   
        </>
    )   
}
export default PictureCarousalCard;
