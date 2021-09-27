import express, { Router } from "express";

//database Model
import { UserModel } from "../../database/menu";

const Route = express.Router();

/* 
Route       : /:_id
Description : Get user data
Parmas      : _id
Body        : None
Access      : Public
Method      : GET
*/
Router.get("/:_id", async (req, res) => {
    try {
       const { _id } = req.params;
       const getUser = await UserModel.findById(_id);
       if(!getUser) {
        return res.json({error : "user Not Found"});
       }

        return res.json({ user : getUser});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
Route       : /:_update
Description : update user id
Parmas      : _update
Body        : userData
Access      : Public
Method      : POST
*/
Router.post("/update/_id", async (req, res) => {
    try {
        const { userId } = req.params;
        const { userData } =  req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set : userData,
            },
            {
                new: true,
            }
        );
        return res.json({ user : updateUserData});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;