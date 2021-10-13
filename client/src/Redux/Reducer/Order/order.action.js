import axios from "axios";

//Redux type
import { GET_RESTAURANT, GET_SPECIFIC_RESTEAURANT } from "./order.type";

export  const getRestaurant = () => async (dispatch) => {
   try {
       const restaurantList = await axios({
            method: "GET",
            url: "https://localhost:3000/restaurant/?city=Banglore",
        });

        return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
   } catch (error) {
       return dispatch({ type: "ERROR", payload: error });
   }
};

export  const getSpecificRestaurant = () => async (dispatch) => {
    try {
        const restaurant = await axios({
             method: "GET",
             url: `https://localhost:3000/restaurant/${_id}`,
         });
 
         return dispatch({ type: GET_SPECIFIC_RESTEAURANT, payload: restaurant.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
 };

