//import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions/products";

function maxIdProduct(array) {
    const maxId = array.reduce((maxId, element) => Math.max(element.id, maxId), -1)
    return maxId + 1
}


import {ADD_PRODUCT} from "../actions/products";

const initialStateProducts = [
    // {
    //     id: 0,
    //     name: ""
    // }
]
export const reducerProducts = (state= initialStateProducts, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const productId = maxIdProduct(state)
            // return [...state, {id: productId, name: action.payload}]
            return [...state, {id: productId, name: action.payload}]
        // case REMOVE_PRODUCT:
        //     return state.filter(element => element.name !== action.payload.name);
        default:
            return state
    }
}