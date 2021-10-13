import express from "express";
import passport from "passport";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";

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
Router.post("/new", async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: process.env.RP_PAY_ID,
        key_secret: process.env.RP_PAY_SECRET,
      });
      
      const options = {
          amount: req.body.amount * 100,  // amount in the smallest currency unit
          currency: "INR",
          receipt: `order_receipt_${uuid()}`,
        };
        const order = await instance.orders.create(options);

        return res.json({ order });
    } catch (error) {
        return res.status(500).json({ error : error.message });
    }
});

export default Router;
