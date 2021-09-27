import express, { Router } from "express";

//database Model
import { ReviewModel } from "../../database/menu";

const Route = express.Router();

/* 
Route       : /new
Description : Add new food Review/Rating
Parmas      : none
Body        : review object
Access      : Public
Method      : POST
*/

Router.post("/food/new", async (req, res) => {
    try {
       const { reviewData } = req.body;
       await ReviewModel.create(reviewData);
        return res.status(200).json({ review : "Successfully created Review"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
Route       : /delete
Description : to Delete food Review/Rating
Parmas      : _id
Access      : Public
Method      : DELETE
*/

Router.delete("/delete/:_id", async (req, res) => {
    try {
       const { _id } = req.params;
       await ReviewModel.findByIdAndDelete(_id);

        return res.status(200).json({ review : "Successfully Deleted Review"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    } 
});


export default Router;
