import express from "express";
import passport from "passport";
//database Model
import { ReviewModel } from "../../database/menu";

const Router = express.Router();

/* 
Route       : /
Description : GET all Reviews
Parmas      : resid
Body        : review object
Access      : Public
Method      : GET
*/
Router.get("/:resid", async(req, res) => {
    try {
        const reviews = await ReviewModel.find({restaurant: req.parmas.resid})
        return res.status(200).json({ reviews });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
Route       : /new
Description : Add new food Review/Rating
Parmas      : none
Body        : review object
Access      : Public
Method      : POST
*/

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc;
        const { reviewData } = req.body;
        await ReviewModel.create({ ...reviewData, user:_id });

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
