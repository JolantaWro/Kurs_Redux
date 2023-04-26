import {ADD_PRODUCT, CHANGE_ORDER, DECREMENT, INCREMENT} from "./actions";

import {combineReducers} from "redux";

const stateCounter = 0;
const stateProduct = [];
// const stateProduct = {productsList: [
//     ], counter : 0}
// const stateProduct = {productsList: [
//         ]};



function maxIdProducts(array) {
    const maxId = array.reduce((maxId, element) => Math.max(element.id, maxId), -1)
    return maxId + 1
}
const counterReducer = (state= stateCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const products = (state= stateProduct, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        case CHANGE_ORDER:
            const newState = [...state];
            const index = state.findIndex((element) => element === action.payload.product);
            if(action.payload.action === "UP") {
                if(!index) {
                    return state;
                }
                [newState[index - 1], newState[index]] = [newState[index], newState[index - 1]];
            } else {
                if (index === newState.length - 1) {
                    return state;
                }
                const choseElement = newState[index];
                newState.splice(index, 1);
                newState.splice(index+1, 0, choseElement);
            }

            return newState

        default:
            return state
    }
}


const rootReducer = combineReducers({
    counter: counterReducer,
    products: products
});

export default rootReducer;