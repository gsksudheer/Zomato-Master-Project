import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';


const MenuCollection = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [currentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    
    return (
        <>
           {isMenuOpen &&
             <ImageViewer
                src={ props.image }
                currentIndex={ currentImg }
                disableScroll={ false }
                onClose={ closeViewer }
            />
           }

           <div className="w-32 h-46 md:w-56 md:h-56 flex flex-col gap-3" onClick={openViewer}>
                <div className="w-full h-full rounded-lg overflow-hidden">
                    <img src={props.image}
                    alt="Menu"
                    className="w-full h-full  transform transition duration-700 hover:scale-110"
                    />
                
                </div>
                <h4 className="text-lg">{props.title}</h4>
                <p className="text-sm text-gray-400 ">{props.pages} pages</p>
           </div>
        </>
    );
};
export default MenuCollection;