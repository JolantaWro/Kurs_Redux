import {ADD_RECIPES} from "../actions/recipes";

const initialStateRecipes = {
    name: "",
    description: "",
    ingredients: []
}

export const reducerRecipes = (state= initialStateRecipes, action) => {
    switch (action.type) {
        case ADD_RECIPES:
            return
        // case REMOVE_PRODUCT:
        //     return state.filter(element => element.name !== action.payload.name);
        default:
            return state
    }
}