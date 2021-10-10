import axios from "axios";

//Redux type
import { GET_IMAGE } from "./Image.type"; 

export  const getImage = (_id) => async (dispatch) => {
   try {
       const imagetList = await axios({
            method: "GET",
            url: `https://localhost:3000/image/${_id}`,
        });

        return dispatch({ type: GET_IMAGE, payload: Image.data });
   } catch (error) {
       return dispatch({ type: "ERROR", payload: error });
   }
};

