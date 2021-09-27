import express from "express";

//Database Model
import { FoodModel } from "../../database/food";

//Validation
import { ValidateRestaurentId } from "../../validation/food";
import { ValidateRestCategory } from "../../validation/food";

const Route = express.Router();

/* 
Route       : /r
Description : get all food based on articular Restaurent 
Parmas      : id
Access      : Public
Method      : GET
*/
Route.get("/r/:_id", async (req, res) => {
    try {
        await ValidateRestaurentId(req.params);
        const { _id } = req.params;
        const  foods = await FoodModel.find({ restaurant : _id });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });        
    }
});

/* 
Route       : /c
Description : get all food based on articular Restaurent 
Parmas      : category
Access      : Public
Method      : GET
*/
Route.get("/c/:category", async (req, res) => {
    try {
        await ValidateRestCategory(req.params);
        const { category } = req.params;
        const  foods = await FoodModel.find({
            category : { $regex : category, $options : "i" }
         });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });        
    }
});

export default Route;
