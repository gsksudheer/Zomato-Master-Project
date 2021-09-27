import React from 'react';

const DeliverySmCard = ({image, title}) => {
    return (
        <>
            <div className="lg:hidden bg-white shadow rounded-md  w-38 md:w-56 flex flex-col ml-3 md:ml-4">
                <div className="w-full h-24">
                    <img src={image} alt="" className="w-full h-full object-cover rounded-t-md" />                    
                </div>
                <div>
                    <h3 className="text-sm text-gray-400 text-center py-1">{title}</h3>
                </div>
            </div>
        </>     
    );
};


const DeliverylgCard = ({image, title}) => {
    return (
        <>
        
            <div className=" hidden lg:block w-64 h-48 bg-blue">
                <div className="w-full h-full">
                    <img src={image} alt="" className="w-full h-full object-cover  rounded-md shadow-lg"/>
                </div>
               
            </div>
            <div>
                
            </div>
        </>     
    )
};

const DeliveryCategory = (props) => {
    return (
        <>
          <div>
            <DeliverySmCard {...props} />
            <DeliverylgCard {...props} />                           
          </div>
        </>
    );
};

export default DeliveryCategory;
