import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//Components
import FloatMenuButton from "../../Components/Restaurant/Order-Online/FloatMenuButton";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';

// Redux actions
import { getFoodList } from '../../Redux/Reducer/Food/Food.action';

const OrderOnline = () => {
    const [menu, setMenu] = useState({});
    const [selected, setSelected] = useState("");

    const onClickHandler = (e) => {
        if(e.target.id) {
            setSelected(e.target.id);
        }
        return;
    }

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
        );
    const dispatch = useDispatch();
    useEffect(() => {
        reduxState && 
        dispatch(getFoodlist(reduxStore.menu)).then((data) => {
            setMenu(data.payload.menus.menus)
        });
    }, [reduxState]);
    
    return (
        <>
            <div className="w-fullh-screen flex flex-row justify-between gap-3">
               <aside className="hidden md:flex w-1/5  flex-col gap-4 h-screen border-r border-gray-300">
                  {menu.map((item) => {
                      <MenuListContainer {...item} key={item._id} onClickHandler={onClickHandler} selected={selected} />
                  })
                  }
               </aside>
               <div className="w-full md:w-4/5 md:mx-4">
                   <h2 className="text-2xl font-bold my-3">Order Online</h2>
                   <h4 className="flex items-center gap-2 font-light text-gray-500 my-6">
                       <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 30 min
                   </h4>
                   <section className="h-screen w-full flex flex-col gap-3 md:gap-5">
                       {menu.map((item) => {
                           <FoodList key={item._id} {...item} />
                       })}
                   </section>
               </div>
            </div>
            <FloatMenuButton />
        </>
    );
};

export default OrderOnline;
