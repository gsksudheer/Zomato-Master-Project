import React, { useState } from 'react';

//Collections
import MenuCollection from '../../Components/Restaurant/MenuCollection';

const Menu = () => {
    const [menus, setMenus] = useState([]);

    return (
        <>
            <div>
                {
                    menus.map((menu) => (
                        <MenuCollection {...menu} />
                    ))
                }              
            </div>
        </>
    );
};

export default Menu;
