import express from "express";

//database Model
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/* 
Route       : /list
Description : get all list menu based on id
Parmas      : id
Access      : Public
Method      : GET
*/
Router.get("/list/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error : error.message })
    }
});

/* 
Route       : /image
Description : get all menu imgaes based on id
Parmas      : id
Access      : Public
Method      : GET
*/
Router.get("/image/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);
        
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error : error.message });
    }
});
export default Router;