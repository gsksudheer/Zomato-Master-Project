import React from 'react'

//Component
import NightLifeCarousal from './NightLifeCarousal';

const NightLife = () => {
    return (
        <>
            <div className=" bg-gray-50 ">
               <div className="pb-16">
                    <h3 className="text-3xl px-4 mb-4">Collections</h3>
                    <h5 className="text-sm px-4 text-gray-600 mb-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</h5>
                    <NightLifeCarousal />
               </div>
           </div>
        </>
    );
};

export default NightLife;
