import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImageViewer from 'react-simple-image-viewer';

//components 
import PhotosCollection from "../../Components/Restaurant/PhotosCollection";

//Redux action
import { getImage } from '../../Redux/Reducer/Image/Image.action';


const Photos = (props) => {
    const [photos, setPhotos] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [currentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    const reduxState = useSelector((globalStore) => {
        globalStore.restaurant.selectedRestaurant.restaurant
    });

    const dispatch = useDispatch();
    useEffect(() => {
       if(reduxState) {
            dispatch(getImage(reduxState?.photos)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => {
                    images.push(location)
                });
                setPhotos(images);
            });
       }
    }, []);

    return (
        <>
           {isMenuOpen && (
               <ImageViewer
               src={ photos }
               currentIndex={ currentImg }
               disableScroll={ false }
               onClose={ closeViewer }
           />
           )}

           <div className="flex flex-wrap gap-3 items-center justify-between">
               {
                   photos.map((photo) => (
                       <PhotosCollection image={photo} openViewer={openViewer} />
                   ))
               }
           </div>
        </>
    );
};

export default Photos;
