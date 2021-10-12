import React  from "react";
import { BsTrashFill } from "react-icons";
import { useDispatch } from "react-redux";

//Redux action
import { deleteCart, IncQty, decQty } from "../../Redux/Reducer/Cart/Cart.action";

const FoodItem = (props) => {
    const dispatch = useDispatch();
    const delteFoodFromCart = () => {
        dispatch(deleteCart(props._id));
    };

    const increment = () => dispatch(IncQty(props._id));
    const decrement = () => {
        if(props.quantity === 1) return;
        dispatch(decQty(props._id))
    };
    return (
        <>
            <div className="flex items-center justify-between gap-2">
                <div>
                    <h5>{props.name}</h5>
                </div> 
                <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-1 items-end">
                        <small>₹{parseInt(props.price)*parseInt(props.quantity)}</small>
                        <div className="flex items-center gap-2 px-1 bg-red-500 text-white rounded">
                            <button onClick={decrement} className="p-1"> - </button>
                            <small>{props.quantity}</small>
                            <button onClick={increment } className="p-1"> + </button>
                        </div>
                        <BsTrashFill onClick={delteFoodFromCart} className="text-zred-400" />
                    </div>
                </div>
            </div>
            <hr className="border-b my-1"/>
        </>
    );
};

export default FoodItem;
  