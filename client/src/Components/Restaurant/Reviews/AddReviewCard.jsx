import React, { useState } from 'react';
import Rating from "react-rating-stars-component";

//Components
import ReviewModel from "../../Restaurant/Reviews/ReviewModel"

const AddReviewCard = () => {
    
    const handleRating = (value) => console.log(value);
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
      }

    return (
        <>
            <ReviewModel isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-col items-start gap-2">
                <h2 className="text-xl font-medium">Rate your experience for</h2>
                <div className="flex items-center gap-3">
                    <div className="flex flex-row-reverse items-center gap-2">
                        <lable htmlFor="Dinning">Dinning</lable>
                        <input type="radio" name="review" id="Dinning"/>
                    </div>
                    <div className="flex flex-row-reverse items-center gap-2">
                        <lable htmlFor="Delivery">Delivery</lable>
                        <input type="radio" name="review" id="Delivery"/>
                    </div>
                </div>
                <div>
                    <Rating count={5} onChange={handleRating} size={24} />
                </div>
                <button onClick={openModal} className="text-zred-500">Write a review</button>
            </div>  
        </>
    );
};

export default AddReviewCard;
