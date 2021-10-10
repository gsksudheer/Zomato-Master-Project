import React from "react";
import { AiOutlineCamera } from 'react-icons/ai';

const ImageGrid = (props)  =>  {
    return(
        <>
            <div>
                    <div className="w-full h-60 md:hidden mt-14"> {/* mobile Device */}
                        <img src={props.images.length && props.images[0].location}
                        alt="Food"
                        className="w-full h-full object-cover rounded-sm"
                        />
                    </div>
                    {/* lg devices */}
                    <div className="hidden md:flex gap-1 w-full h-80 lg:h-96 md:mt-20 lg:mt-5">
                        <div className="w-7/12 h-full overflow-hidden"> 
                            <img src={props.images.length && props.images[0].location}
                            alt="RestaurantFoodImage"
                            className="w-full h-full  rounded-sm transition duration-700 transform hover:scale-110"
                            />
                        </div>
                        <div className="w-40 lg:w-1/5 h-full flex flex-col gap-1 ">
                            <div className="w-full h-2/4 overflow-hidden">
                                <img src={props.images.length >=1 && props.images[1].location}
                                alt="Food"
                                className="w-full h-full  rounded-sm transition duration-700 transform hover:scale-110"/>
                            </div>
                            <div className="w-full h-2/4 overflow-hidden">
                                <img src={props.images.length >=2 && props.images[2].location}
                                alt="Food"
                                className="w-full h-full  rounded-sm transition duration-700 transform hover:scale-110"/>
                            </div>
                        </div>
                        <div className="w-40 lg:w-1/5 h-2/4 flex flex-col gap-1 ">
                            <div className="w-full h-full relative overflow-hidden">
                                <img src={props.images.length >=3 && props.images[3].location}
                                alt="Food"
                                className="w-full h-full  rounded-sm "/>
                                <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-sm flex items-center">
                                    <h4 className="absolute inset-y-2/4 z-20 text-center w-full h-full text-center text-white font-semibold ">View Gallery</h4>
                                </div>
                            </div>
                            <div className="w-full h-2/4 relative">
                                <img src={props.images.length >=4 && props.images[4].location}
                                alt="Food"
                                className="w-full h-full  rounded-sm "/>
                                <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full  rounded-sm">
                                    <div className="absolute inset-y-2/4 z-20 w-full text-white text-center font-semibold flex flex-col items-center justify-center">
                                       <div className="bg-black bg-opacity-50 p-3 rounded-full"> <AiOutlineCamera  /></div>
                                        <h4>View Gallery</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ImageGrid;
