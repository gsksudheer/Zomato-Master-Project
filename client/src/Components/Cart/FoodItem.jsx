import React  from "react";

const FoodItem = (props) => {
    return (
        <>
            <div className="flex items-center justify-between gap-2">
                <div>
                    <h5>{props.name}</h5>
                </div> 
                <div className="flex flex-col gap-2 items-end">
                    <small>₹{parseInt(props.price)*parseInt(props.quantity)}</small>
                    <div className="flex items-center gap-2 px-1 bg-red-500 text-white rounded">
                        <button className="p-1">-</button>
                        <small>3</small>
                        <button className="p-1">+</button>
                    </div>
                </div>
            </div>
            <hr className="border-b my-1"/>
        </>
    );
};

export default FoodItem;
  