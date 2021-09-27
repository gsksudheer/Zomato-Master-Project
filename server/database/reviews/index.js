import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    restaurent: { type: mongoose.Types.ObjectId, ref: "Restaurents" },
    user:  { type: mongoose.Types.ObjectId, ref: "Users" },
    rating: { type: Number, require: true },
    reviewText: { type: String, require: true },
    isFoodReview: Boolean,
    isRestaurantReview: Boolean,
    photos: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Images",
        },
    ],
 },
 {
    timestamps: true,
 }
 );

export const ReviewsModel = mongoose.model("Reviews", ReviewSchema);
