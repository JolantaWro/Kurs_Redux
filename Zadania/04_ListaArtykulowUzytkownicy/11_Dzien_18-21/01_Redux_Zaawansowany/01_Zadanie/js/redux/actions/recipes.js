export const ADD_RECIPES = "ADD_RECIPES";

export const addRecipes = (recipe) => ({
    type: ADD_RECIPES,
    payload: recipe
});