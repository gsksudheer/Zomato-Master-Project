import React from "react";
import { Route } from "react-router-dom";

//Layout
import CheckoutLayout from "../Layouts/Checkout.layout";

const CheckoutLayoutHoc = ({ component: Component, ...rest}) => {
    return (
        <>
         <Route
            {...rest}
            component={(props) => (
                <CheckoutLayout>
                    <Component {...props} />
                </CheckoutLayout>
            )}   
         />
        </>
    );
};
export default CheckoutLayoutHoc;