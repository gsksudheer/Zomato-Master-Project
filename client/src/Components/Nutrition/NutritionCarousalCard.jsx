import React from 'react';

const NutritionCard = ({image, title}) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-md h-full w-24  md:w-56 flex flex-col  md:ml-4">
                <div className="w-full h-12 md:h-36">
                    <img src={image} alt="" className="w-full h-full object-cover rounded-t-md" />                    
                </div>
                <div>
                    <h3 className="text-sm md:text-md text-center py-1 my-1">{title}</h3>
                </div>
            </div>
        </>     
    );
};

const NutritionCarousalCard = (props) => {
    return (
        <>
      
          <div>
            <NutritionCard {...props} />                           
          </div>
        </>
    );
};

export default NutritionCarousalCard;
/* 
 <div className="bg-white shadow-lg rounded-md h-full w-24  flex flex-col ml-3 md:ml-4">
                <div className="w-full h-12 md:h-36">
                    <img src={image} alt="" className="w-full h-full object-cover rounded-t-md" />                    
                </div>
                <div>
                    <h3 className="text-lg md:text-md text-center py-1">{title}</h3>
                </div>
            </div>
*/