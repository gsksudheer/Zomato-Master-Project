import React from "react";

const PhotosCollection = (props) => {
    
    return (
        <>
           <div className="w-32 h-46 md:w-56 md:h-56 flex flex-col gap-3" >
                <div className="w-full h-full rounded-lg overflow-hidden" onClick={props.openViewer}>
                    <img src={props.image}
                    alt="Menu"
                    className="w-full h-full  transform transition duration-700 hover:scale-110"
                    />
                </div>
           </div>
        </>
    );
};
export default PhotosCollection;