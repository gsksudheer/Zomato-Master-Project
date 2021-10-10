import React, { useState } from 'react';

//Components
import MenuCategory from './MenuCategory';

const MenuListContainer = (props) => {
   
    return (
        <>
        <div className="flex flex-col gap-3 px-3">
            <h3>
               <MenuCategory
                 name={props.name}
                 items={props.items}
                 onClickHandler={props.onClickHandler} 
                 isActive={props.selected === props.name} 
                />
            </h3> 
        </div>          
        </>
    );
};

export default MenuListContainer;
