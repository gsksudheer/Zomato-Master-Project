import express from "express";

//Database Model
import { RestaurentModel } from "../../database/allModels";

//Validation
import { ValidateRestaurentCity,  ValidateRestaurentSearchString } from "../../validation/restaurant"
import { ValidateRestaurentId } from "../../validation/food";

const Router = express.Router();

/* 
Route       : /r
Description : get all Restaurent based on city
Parmas      : id
Access      : Public
Method      : GET
*/
Router.get("/r/:id", async(req, res) => {
    try {
        await ValidateRestaurentCity(req.query);
        const { city } = req.query;
        const restaurants = await RestaurentModel.find({ city });
        if(!restaurants) {
            return res.status(404).json({ error : "restaurent not found" })
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error : error.message });        
    }
});

/* 
Route       : /search
Description : get Restaurent based on the search string
Parmas      : none
Body        : searchString
Access      : Public
Method      : GET
*/
Router.get("/search", async (req, res) => {
    try {
        await  ValidateRestaurentSearchString(req.body);
        const { searchString } = req.body;
        
        const restaurants = await RestaurentModel.find({
            name : { $regex : searchString, $options : "i" } // $regex is the mongodb operator, i stands for case insenstive
        });
        if(!restaurants) {
            return res.status(404).json({ error : `No Restaurent found for ${searchString}` });
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error : error.message })        
    }
});

/* 
Route       : /search
Description : get indivisual Restaurent based on the id
Parmas      : id
Access      : Public
Method      : GET
*/
Router.get("/:_id", async (req, res) => {
    try {

        await ValidateRestaurentId(req.params);
        const {_id } = req.params;
        
        const restaurants = await RestaurentModel.findById(_id);
        if(!restaurants) {
            return res.status(404).json({ error : "Restaurant not Found"});
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error : error.message })        
    }
});

export default Router;