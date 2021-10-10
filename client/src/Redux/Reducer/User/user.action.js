import axios from "axios";

//Redux type
import { GET_USER, AUTH_USER } from "./user.type"; 

export  const getUser = (_id) => async (dispatch) => {
   try {
       const User = await axios({
            method: "GET",
            url: `https://localhost:3000/user/${_id}`,
        });

        return dispatch({ payload: User.data });
   } catch (error) {
       return dispatch({ type: "ERROR", payload: error });
   }
};


export  const getUser = () => async (dispatch) => {
    try {
        const User = await axios({
             method: "GET",
             url: `https://localhost:3000/user/`,
         });
 
         return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
 };

/* 
export const authUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
             method: "GET",
             url: `https://localhost:3000/user/${_id}`,
         });
         localStorage.setItem("zomato", _id)
         return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}; */