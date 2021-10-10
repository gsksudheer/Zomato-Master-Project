import React from 'react';

//Components
import CheckoutNavbar from '../Components/Navbar/CheckoutNavbar';

const CheckoutLayout = (props) => {
    return (
        <>
            <CheckoutNavbar />
            <div className="constainer mx-auto px:3 md:-px-40 lg:px-40">  
                {props.children}
           </div>     
        </>
    );
};

export default CheckoutLayout;
