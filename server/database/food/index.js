import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: { type:String, require: true },
    description: { type: String, require: true },
    isVeg: { type: Boolean, required: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    price: { type: Number, default: 150, required: true },
    addons: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
        },
    ],
    restaurent: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurents",
        required: true,
    },
 },
 {
    timestamps: true,
 }
);

export const FoodModel = mongoose.model("Foods", FoodSchema);
