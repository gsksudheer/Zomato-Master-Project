import React, { useState } from 'react';

//Components
import MenuCategory from './MenuCategory';

const MenuListContainer = () => {
    const [selected, setSelected] = useState("");
    const onClickHandler = (e) => {
        if(e.target.id) {
            setSelected(e.target.id);
        }
        return;
    }
    return (
        <>
        <div className="flex flex-col gap-3 px-3">
            <h3>
               <MenuCategory name="Recommended" items={["", ""]} onClickHandler={onClickHandler} isActive={selected === "Recommended"} />
            </h3> 
        </div>          
        </>
    );
};

export default MenuListContainer;
