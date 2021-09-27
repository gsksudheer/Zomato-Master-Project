import React from 'react';
import classnames from "classnames";

const MenuCategory = (props) => {
    
    return (
        <>
          <div className={classnames({"text-zred-500 pr-50  py-2 bg-zred-50 border-r-4 border-zred-500": props.isActive})}>
            <h3 onClick={ props.onClickHandler } id={props.name} className="cursor-pointer">
                {props.name} ({props.items.length})
            </h3>
          </div>  
        </>
    );
};

export default MenuCategory;
