import express from "express";
import passport from "passport";
//database Model
import { OrderModel } from "../../database/menu";

const Router = express.Router();

/* 
Route       : /
Description : get all orders based on id
Parmas      : _id
Access      : Public
Method      : GET
*/
Router.get("/:_id", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({user: _id})
        if(getOrders) {
            return res.status(404).json({ error: "User Not Found"});
        }

        return res.status(200).json({ orders: getOrders });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
Route       : /new
Description : Add order Details
Parmas      : _id
Access      : Public
Method      : GET
*/
Router.post("/new/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id,
            },
            {
                $push: {orderDetails},
            },
            { new : true}
        );

        return res.json({order: addNewOrder});

    } catch (error) {
        return res.status(500).json({error: error.message});

    }
});


export default Router;