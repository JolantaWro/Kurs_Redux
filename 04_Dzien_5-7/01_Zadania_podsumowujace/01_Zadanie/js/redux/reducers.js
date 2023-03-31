// export default combineReducers({
//   counter,
//   products zad 2
// });
import {ADD_PRODUCT, DECREMENT, INCREMENT} from "./actions";

import {combineReducers} from "redux";

const stateCounter = 0;
const stateProduct = [];
const counter = (state=stateCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const products = (state=stateProduct, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state

    }
}

export default combineReducers({
    counter,
    products
})