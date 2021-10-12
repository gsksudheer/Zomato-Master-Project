import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Rating from "react-rating-stars-component";
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

//Redux action
import { postReviews } from '../../../Redux/Reducer/Reviews/review.action';

export default function ReviewModel({
    isOpen, 
    setIsOpen,
     ...props,
    }) {
  const [reviewData, setReviewData] = useState({ 
    subject: "", 
    reviewText: "", 
    isRestaurantReview: "false",
    isFOodReview: "false",
    rating: 0,
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleChange = (value) => setReviewData((prev) => ({
    ...prev, [value.target.id]: value.target.value,
  }))

  function closeModal() {
    setIsOpen(false)
  }

  const toggleDinning = () => {
    setReviewData((prev) => ({
      ...prev, 
      isFoodReview: false,
      isRestaurantReview: !reviewData.isRestaurantReview
    }));
  }
  const toggleDelivery = () => {
    setReviewData((prev) => ({
      ...prev, 
      isRestaurantReview: false,
      isFoodReview: !reviewData.isFoodReview
    }));
  }
  const handleRating = (rating) => {
    setReviewData((prev) => ({...prev, rating}))
  }
  const submit = () => {
    dispatch(postReviews({
      ...reviewData,
      restaurant: id,
    }));
    setReviewData({ 
      subject: "", 
      reviewText: "", 
      isRestaurantReview: "false",
      isFOodReview: "false",
      rating: 0,
    });
    //  TO close the model
    closeModal();
  }
    return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900"
                >
                  Add Review
                </Dialog.Title>
                <div className="mt-3">
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-row-reverse items-center gap-2">
                                <lable htmlFor="Dinning">Dinning</lable>
                                <input type="radio" name="review" id="Dinning" checked={reviewData.isRestaurantReview} onChange={toggleDinning} />
                            </div>
                            <div className="flex flex-row-reverse items-center gap-2">
                                <lable htmlFor="Delivery">Delivery</lable>
                                <input type="radio" name="review" id="Delivery" checked={isFoodReview} onChange={toggleDelivery} />
                            </div>
                        </div>
                        <div>
                          <Rating count={5} onChange={handleRating} value={reviewData.rating} size={24} onChange={handleRating} />
                        </div>
                        <form className="flex flex-col items-start gap-3 w-full">
                          <div className="flex flex-col gap-2 w-full">
                              <lable htmlFor="subject" className="text-lg font-medium leading-6">
                                Subject
                              </lable>
                              <input type="text" name="rating" value={reviewData.subject} onChange={handleChange} id="subject" placeholder="amazing food"
                              className="w-full px-3 py-1 border border-transparent rounded-sm foFcus:outline-none focus:border-zred-200 border-blue-400"/>
                          </div>              
                          <div className="w-full">
                            <textarea rows="10" value={reviewData.reviewText} onChange={handleChange} className="w-full px-3 py-1 border border-transparent rounded-md focus:outline-none focus:border-zred-200 border-blue-400">
                            </textarea>  
                          </div>              
                        </form>
                      </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={submit}
                  >
                    submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
