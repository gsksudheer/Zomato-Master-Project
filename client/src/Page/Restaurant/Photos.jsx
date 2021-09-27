import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

//components 
import PhotosCollection from "../../Components/Restaurant/PhotosCollection";

const Photos = (props) => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/6/19257266/f00da77a93539279c09b60992357afeb_o2_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/6/19257266/f00da77a93539279c09b60992357afeb_o2_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/6/19257266/f00da77a93539279c09b60992357afeb_o2_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg",
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [currentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

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
