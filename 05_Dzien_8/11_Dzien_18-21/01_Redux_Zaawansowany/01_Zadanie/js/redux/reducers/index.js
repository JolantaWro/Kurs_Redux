
import {combineReducers} from "redux";
import {reducerProducts} from "./products";
import {reducerRecipes} from "./recipes";




const rootReducer = combineReducers({
    products: reducerProducts,
    recipes: reducerRecipes
});

export default rootReducer;