import { SIGNIN, SIGNUP } from "./Auth.type"; 

const INITIAL_STATE = {};

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
            };
        case SIGNUP :
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};

export default AuthReducer;
