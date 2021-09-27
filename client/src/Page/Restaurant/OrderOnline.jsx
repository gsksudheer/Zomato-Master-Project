import React from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//Components
import FloatMenuButton from "../../Components/Restaurant/Order-Online/FloatMenuButton";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';

const OrderOnline = () => {
    return (
        <>
            <div className="w-fullh-screen flex flex-row justify-between gap-3">
               <aside className="hidden md:flex w-1/5  flex-col gap-4 h-screen border-r border-gray-300">
                   <MenuListContainer />
                   <MenuListContainer />
                   <MenuListContainer />
                   <MenuListContainer />
                   <MenuListContainer />
                   <MenuListContainer />
                   <MenuListContainer />
                   <MenuListContainer />
               </aside>
               <div className="w-full md:w-4/5 mx-4">
                   <h2 className="text-2xl font-bold my-3">Order Online</h2>
                   <h4 className="flex items-center gap-2 font-light text-gray-500 my-6">
                       <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 30 min
                   </h4>
                   <section className="h-screen w-full flex flex-col gap-3 md:gap-5">
                       <FoodList
                        title = "Recommended"
                        items = {[
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/6f9/50f7fada8615cd36f029f7e8365456f9.jpg?fit=around|130:130&crop=130:130;*,*",
                                title:"Love by Chocolate Sundae",
                                price:"300",
                                rating:4,
                                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repudiandae quia officia quasi ex quibusdam odio reiciendis repellat quaerat repellendus maiores doloribus asperiores, corporis magni similique qui, totam consequuntur.", 
                            },  
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/6f9/50f7fada8615cd36f029f7e8365456f9.jpg?fit=around|130:130&crop=130:130;*,*",
                                title:"Love by Chocolate Sundae",
                                price:"300",
                                rating:4,
                                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repudiandae quia officia quasi ex quibusdam odio reiciendis repellat quaerat repellendus maiores doloribus asperiores, corporis magni similique qui, totam consequuntur.", 
                            },   
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/6f9/50f7fada8615cd36f029f7e8365456f9.jpg?fit=around|130:130&crop=130:130;*,*",
                                title:"Love by Chocolate Sundae",
                                price:"300",
                                rating:4,
                                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repudiandae quia officia quasi ex quibusdam odio reiciendis repellat quaerat repellendus maiores doloribus asperiores, corporis magni similique qui, totam consequuntur.", 
                            },  
                            
                        ]} 
                        />
                         <FoodList
                        title = "cakes"
                        items = {[
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/6f9/50f7fada8615cd36f029f7e8365456f9.jpg?fit=around|130:130&crop=130:130;*,*",
                                title:"Love by Chocolate Sundae",
                                price:"300",
                                rating:4,
                                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repudiandae quia officia quasi ex quibusdam odio reiciendis repellat quaerat repellendus maiores doloribus asperiores, corporis magni similique qui, totam consequuntur.", 
                            },  
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/6f9/50f7fada8615cd36f029f7e8365456f9.jpg?fit=around|130:130&crop=130:130;*,*",
                                title:"Love by Chocolate Sundae",
                                price:"300",
                                rating:4,
                                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repudiandae quia officia quasi ex quibusdam odio reiciendis repellat quaerat repellendus maiores doloribus asperiores, corporis magni similique qui, totam consequuntur.", 
                            },   
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/6f9/50f7fada8615cd36f029f7e8365456f9.jpg?fit=around|130:130&crop=130:130;*,*",
                                title:"Love by Chocolate Sundae",
                                price:"300",
                                rating:4,
                                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus repudiandae quia officia quasi ex quibusdam odio reiciendis repellat quaerat repellendus maiores doloribus asperiores, corporis magni similique qui, totam consequuntur.", 
                            },  
                            
                        ]} 
                        />
                   </section>
               </div>
            </div>
            <FloatMenuButton />
        </>
    );
};

export default OrderOnline;
