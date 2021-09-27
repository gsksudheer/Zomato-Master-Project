import React from 'react'

const NUtritionHeroCarousalCard = (props) => {
    return (
        <div>
            <div className="w-full h-56 lg:h-72 mt-14 lg:mt-0">
                        <img src={props.image} alt="" className="w-full h-full rounded-lg md:px" />
             </div>
        </div>
    )
}
export default NUtritionHeroCarousalCard;