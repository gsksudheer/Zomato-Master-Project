import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


//Collections
import MenuCollection from '../../Components/Restaurant/MenuCollection';

//Redux action
import { getImage } from '../../Redux/Reducer/Image/Image.action';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    
    const reduxState = useSelector((globalStore) => {
        globalStore.restaurant.selectedRestaurant.restaurant
    });

    const dispatch = useDispatch();
    useEffect(() => {
       if(reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => {
                    images.push(location)
                });
                setMenus(images);
            });
       }
    }, []);

    return (
        <>
            <div>
                <MenuCollection image={menus} title="items" pages={menus.length} />
               {/*  {
                    menus.map((menu) => (
                        <MenuCollection {...menu} />
                    ))
                }        */}       
            </div>
        </>
    );
};

export default Menu;
