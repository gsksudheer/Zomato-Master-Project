import React, { useState, useEffect }  from "react";
import { useSelector, useDispatch } from "react-redux";
//Components
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/Restaurant/Reviews/AddReviewCard";

//Redux action
import { getReviews } from "../../Redux/Reducer/Reviews/review.action";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    
    const dispatch = useDispatch();

    const reduxState = useSelector((globalStore) => 
        globalStore.restaurant.selectedRestaurant.restaurant
    );

    useEffect(() => {
            dispatch(getReviews(reduxState?._id)).then((data) => {
                setReviews(data.payload.reviews);
            });
    }, []);
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