//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//Models
import { UserModel } from  "../../database/user";

//Validation
import { ValidateSignup } from "../../validation/auth";
import { ValidateSignin } from "../../validation/auth";

const Router =  express.Router();

/* 
Route       : /signup
Description : signup with emial and password
Parmas      : none
Access      : Public
Method      : Post
*/

Router.post("/signup", async (req, res) => {
    try {

        await ValidateSignup(req.body.credentials);
        //const { email, password, fullName, phoneNumber } = req.body.credentials;

        //check whether email exists or not
       /*  const checkUserByEmail = await UserModel.findOne({ email: email });//{ email: email }== {email}
        const checkUserByPhone = await UserModel.findOne({ phoneNumber: phoneNumber });

        if(checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "user already exist"});
        }
        we can define it in the usermodel to make the code clean and good
        */
       await UserModel.findByEmailAndPhone(req.body.credentials);
        //hash the password
       /* 
        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);
        we can directly run this with pre() function
        */

        //save to DataBasenpm
       /*  await UserModel.create({
            ...req.body.credentials,
            password: hashedPassword,
        });
        we can directly pass the props
         */
        const newUser = await UserModel.create( req.body.credentials );

        //generate JWT auth token
        //const token = jwt.sign({ user: { email, fullName }}, "ZomatoApp");
        const token = newUser.generateJwtToken();
        //return 
        return res.status(200).json({ token, status: "success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/* 
Route       : /signin
Description : signin with emial and password
Parmas      : none
Access      : Public
Method      : Post
*/
Router.post("/signin", async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials);
        
        const user =  await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();

        return res.status(200).json({ token, status: "success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route       : /google
Description : google signin
Parmas      : none
Access      : Public
Method      : GET
*/
Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
    })
);

/* 
Route       : /google/callback
Description : goole signin callback
Parmas      : none
Access      : Public
Method      : GET
*/
/* 
Router.get("/google/callback", passport("google", {failureRedirect: "/"}), 
    (req, res) => {
        return res.redirect(
            `http://localhost:3000/google/${req.session.passport.user.token}`
        );
    }) ; */
export default Router;


//statics and methods in mongoose
