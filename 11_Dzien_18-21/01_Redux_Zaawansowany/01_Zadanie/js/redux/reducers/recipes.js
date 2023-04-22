import {ADD_RECIPE} from "../actions/recipes";

function maxIdProduct(array) {
    const maxId = array.reduce((maxId, element) => Math.max(element.id, maxId), -1)
    return maxId + 1
}

const initialStateRecipes = []


export const reducerRecipes = (state= initialStateRecipes, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            const recipeId = maxIdProduct(state)
            return [...state, {id: recipeId, ...action.payload}]
        // case REMOVE_PRODUCT:
        //     return state.filter(element => element.name !== action.payload.name);
        default:
            return state
    }
}