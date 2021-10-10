import { GET_Food_List } from "./Food.type"; 

const INITIAL_STATE = {
    FoodList: [],
};

const FoodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_Food_List:
            return {
                ...state,
                FoodList: action.payload,
            };
        
        default:
            return {
                ...state,
            };
    }
};
export default FoodReducer;