import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

//Components
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from "../Components/Chekout/AddressList";

const Checkout = () => {
    const reduxState = useSelector((global) =>  global.cart.cart );
    const address = [
        {
            name:"Home",
            address:"India",
        },
        {
            name:"Office",
            address:"India",
        },
        {
            name:"College",
            address:"India",
        },
    ]
    const options = {
        "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    return (
        <>
            <div className="flex flex-col items-center gap-3 my-3">
                <h1 className="text-2xl font-bold">Checkout</h1>
                <div className="flex flex-col items-center w-full md:w-3/5 bg-white shadow-lg rounded-lg my-2 px-2 py-4">
                    <h3 className="text-lg font-semibold">Summary</h3>
                    <div className="flex flex-col items-center gap-2 w-full">
                        <h5 className="text-md font-base">ORDER FROM</h5>
                        <div className="flex flex-col items-center gap-2 w-full text-gray-400">
                            <h4>Domino's Pizza</h4>
                            <small>GT World Mall, Magadi Road, Banglore</small>
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col gap-2 px-4">
                        {reduxState.map((food) => {
                            <FoodItem  key={food._id} {...food} />
                        })}
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col gap-3 mt-4">
                            <h4 className="text-xl font-semi-bold">Choose Address</h4>
                            <AddressList address={address} />
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full md:w-4/5 px-4 md:px-0 mx-4 my-4 md:my-8 h-12 md:h-14 text-white font-medium bg-zred-500 rounded-lg">
                        Pay Securely<BsShieldLockFill />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;
