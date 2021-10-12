import axios from "axios";

//Redux type
import { SIGNIN, SIGNUP, GOOGLE_AUTH, SIGNOUT} from "./Auth.type"; 

//Redux actions
import { getMySelf, clearUser } from "../User/user.action";

export  const signIn = (userData) => async (dispatch) => {
   try {
       const User = await axios({
            method: "POST",
            url: `https://localhost:3000/auth/signin`,
            data: { credentials : userData },
        });

        getMySelf();

        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));

        return dispatch({ type: SIGNIN, payload: User.data });
   } catch (error) {
       return dispatch({ type: "ERROR", payload: error });
   }
};


export  const googleAuth = (token) => async (dispatch) => {
    try {
        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));

        getMySelf();
 
        return dispatch({ type: GOOGLE_AUTH, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
 };

export  const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("zomatoUser");
        clearUser();
        window.location.href = "http://localhost:3000/Delivery";
        
        return dispatch({ type: SIGNOUT, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
 };


export  const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
             method: "POST",
             url: `https://localhost:3000/auth/sigup`,
             data: { credentials : userData },
         });
         getMySelf();
 
         localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));
 
         return dispatch({ type: SIGNUP, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
 };

/* 
 export  const googleAuth = (userData) => async (dispatch) => {
    try {
        const User = await axios({
             method: "POST",
             url: `https://localhost:3000/auth/`,
             data: { credentials : userData },
         });
 
         localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));
 
         return dispatch({ type: googleAuth, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
 }; */

 
 
