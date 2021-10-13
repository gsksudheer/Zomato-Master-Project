import { GET_RESTAURANT } from "./order.type";

const INITIAL_STATE = {
    restaurants: [],
    selectedRestaurant: {},
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RESTAURANT:
            return {
                ...state,
                restaurants: action.payload,
            };
        case GET_SPECIFIC_RESTEAURANT:
            return {
                ...state,
                selectedRestaurant: action.payload,
            };
        
        default:
            return {
                ...state,
            };
    }
};
export default restaurantReducer;