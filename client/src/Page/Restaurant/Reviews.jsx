import React, { useState } from "react";

//Components
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/Restaurant/Reviews/AddReviewCard";

const Reviews = () => {
    const [reviews, setReviews] = useState(["", "", ""]);
   
    return (
        <>
            
            <div className="flex flex-col md:flex-row  gap-2 mb-10">
                <div className="flex flex-col gap-1 w-full md:w-2/3 relative">
                    <div className="md:hidden">
                        <AddReviewCard />
                    </div>
                {
                    reviews.map((review) => (
                        <ReviewCard {...review} />
                    ))
                }
                </div>
                <aside style={{height:"fit-content"}} className="hidden md:block w-1/3 h-20 bg-white rounded-lg px-4 py-5 shadow-2xl">
                    <AddReviewCard />
                </aside>
            </div>
        </>
    );
};
export default Reviews;