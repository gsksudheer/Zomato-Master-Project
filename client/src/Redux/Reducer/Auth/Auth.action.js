import axios from "axios";

//Redux type
import { GET_Food, GET_Food_List } from "./Auth.type"; 

export  const getFood = (foodId) => async (dispatch) => {
   try {
       const food = await axios({
            method: "GET",
            url: `https://localhost:3000/food/${foodId}`,
        });

        return dispatch({ type: GET_Food, payload: food.data });
   } catch (error) {
       return dispatch({ type: "ERROR", payload: error });
   }
};

export  const getFoodList = (menuId) => async (dispatch) => {
    try {
        const Menu = await axios({
             method: "GET",
             url: `https://localhost:3000/menu/list/${menuId}`,
         });
 
         return dispatch({ type: GET_Food_List, payload: Menu.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};
 
 
