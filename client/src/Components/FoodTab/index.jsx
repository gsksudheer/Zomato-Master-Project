import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

const MobileFoodTab = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: "Delivery",
            icon:  <BiShoppingBag className="w-full h-full"/>,
            name: "Delivery",
            isActive: false,
    
        },
        {
            id: "Dinning",
            icon:  <IoFastFoodOutline className="w-full h-full"/>,
            name: "Dinning Out",
            isActive: false,
    
        },
        {
            id: "Nightlife",
            icon:  <BiDrink className="w-full h-full"/>,
            name: "Nightlife",
            isActive: false,
    
        },
        {
            id: "Nutrition",
            icon:  <IoNutritionOutline className="w-full h-full"/>,
            name: "Nutrition",
            isActive: false,
    
        },
    ]); 

    const { type } = useParams();

  /*   useEffect(() => {
        if(type) {
            const updatedTypes = allTypes.map((item) => {
                if(item.id===type) {
                    return {...item, isActive:true};
                }
                return item;
            });
            setAllTypes(updatedTypes);
        }
    }, [type]) */

    return (
        <>
        <div className="fixed bottom-0 bg-white w-full flex items-center justify-around border p-3 md:justify-evenly lg:hidden">       
        {
            allTypes.map((items) => (
               <Link to={`/${items.id}`}>
                    <div className={type === items.id ? "relative flex items-center flex-col text-zred-400 "
                        : "flex items-center flex-col"}>
                        <div className="w-6">
                            {items.icon}
                        </div>            
                    <h3 className="text-sm">{items.name}</h3>
                        <div className={type === items.id && "absolute -top-3 w-full border-t-2 border-zred-400"} />
                    </div>
               </Link>
            ))
        }
        </div>
    </>
    );
};

const PcFoodTab = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: "Delivery",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            iconActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name: "Delivery", 
            color: "yellow",
        },
        {
            id: "Dinning",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            iconActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name: "Dinning Out",
            color: "purple",
        },
        {
            id: "Nightlife",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            iconActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name: "Nightlife",
            color: "purple",
        },
        {
            id: "Nutrition",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            iconActive: "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            name: "Nutrition",
            color: "yellow",
        },
    ]); 

    const { type } = useParams();
    return (
        <>
            <div className="hidden lg:flex conatiner mx-auto px-44 my-4 lg:flex itmes-center gap-8  border-b-2 border-gray-1 ">
            {
                allTypes.map((items) => (
                   <Link to={`/${items.id}`}>
                     <div className={`flex items-center gap-3 pb-4 relative  ${type===items.id ? "border-b-4 border-zred-400 transation duration-400 ease-in ":"hover:ring-2 hover:ring-red-500" }`}>
                        <div className={`w-16 h-16 bg-${type===items.id ? items.color : "gray"}-100  rounded-full p-4 ${type===items.id ? "border-b-2 border-zred-400": "border-b-2 border-red-200" }` }>
                            <img src={type===items.id ? items.iconActive : items.iconDefault}
                            alt="delivery"
                            className="w-full h-full"
                            />
                        </div>
                        <h3 className="text-xl text-gray-800">{items.name}</h3>                   
                    </div>
                    
                    {/* <div className={items.id===type ? "border-b-2 border-zred-400 transation duration-400 ease-in ":"border-b-2 border-zred-50"} /> */}
                   </Link>
                ))
            }            
            </div>   
        </>
    );
};

const FoodTab = () => {
    return (
       <div>
           <MobileFoodTab />
           <PcFoodTab />
       </div>
    );
};

export default FoodTab





