import {ADD_RECIPE} from "../actions/recipes";

const initialStateRecipes = {
    name: "",
    description: "",
    ingredients: []
}

export const reducerRecipes = (state= initialStateRecipes, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return
        // case REMOVE_PRODUCT:
        //     return state.filter(element => element.name !== action.payload.name);
        default:
            return state
    }
}