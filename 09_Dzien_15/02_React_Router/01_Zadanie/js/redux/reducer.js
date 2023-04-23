import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions";
import {combineReducers} from "redux";

const reducerProducts = (state= [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        case REMOVE_PRODUCT:
            return state.filter(element => element.name !== action.payload.name);
        default:
            return state
    }
}
const rootReducer = combineReducers({
    products: reducerProducts
});

export default rootReducer;

