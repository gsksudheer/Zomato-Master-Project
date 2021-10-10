import express from "express";
import passport, { session } from "passport";

//database Model
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/* 
Route       : /
Description : Get user data
Parmas      : _id
Body        : None
Access      : Public
Method      : GET
*/
/* Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { email, fullname, phoneNumber, address } =
        req.session.passport.user._doc;
  
      return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }); */
  
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    console.log("USer");
    try {
       const  { email, fullname, phoneNumber, address } = req.session.passport.user._doc;
       console.log(session.passport.user);
        return res.json({ user : { email, fullname, phoneNumber, address }});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


/* 
Route       : /:id
Description : Get user data
Parmas      : _id
Body        : None
Access      : Public
Method      : GET
passport.authenticate("jwt"),
*/

Router.get("/",  async (req, res) => {
    try {
        const user =  await UserModel.findById(req.params._id);
        const { fullname } = user;

      return res.json({ user: { fullname} });
    } catch (error) {
      return res.status(500).json({ error: error.message });
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