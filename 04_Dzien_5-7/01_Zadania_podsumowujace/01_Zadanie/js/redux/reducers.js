// export default combineReducers({
//   counter,
//   products zad 2
// });

import {ADD_PRODUCT, CHANGE_ORDER, DECREMENT, INCREMENT} from "./actions";

import {combineReducers} from "redux";

const stateCounter = 0;
// const stateProduct = {productsList: [
//     ], counter : 0}
const stateProduct = {productsList: [
        ]};



function maxIdProducts(array) {
    const maxId = array.reduce((maxId, element) => Math.max(element.id, maxId), -1)
    return maxId + 1
}
const counter = (state= stateCounter, action) => {
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
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                productsList: [...state.productsList, {
                    id: maxIdProducts(state.productsList),
                    text: action.payload
                }]
            }
        case CHANGE_ORDER:
            return {
                ...state,
                productsList: state.productsList.map(product => {
                    if(product.id === action.payload.id) {
                        return {...product}
                    }
                })
            }

        default:
            return state
    }
}



export default combineReducers({
    counter,
    products
})
