import React from 'react';

//Components
import FoodItem from './FoodItem';

const FoodList = (props) => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold my-3 bg-white px-2 py-1 sticky top-20 lg:top-0 z-10">
                    {props.name}
                </h1>
                {
                    props.items.map((item) => (
                        <FoodItem key={item} _id={item} />
                    ))
                }
            </div>  
        </>
    );
};

export default FoodList;
