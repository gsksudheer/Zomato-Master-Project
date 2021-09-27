import React from 'react'

//Component
import DinningCarousal from './DinningCarousal';

const Dinning = () => {
    return (
        <>
           <div className="bg-gray-50">
               <div className="pb-16">
                    <h3 className="text-3xl px-4 mb-4">Collections</h3>
                    <h5 className="text-sm px-4 text-gray-600 mb-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</h5>
                    <DinningCarousal />
               </div>
           </div>
           <h1 className="text-xl mt-5">Dine-Out Restaurants in Bengaluru</h1>
        </>
    );
};

export default Dinning;
