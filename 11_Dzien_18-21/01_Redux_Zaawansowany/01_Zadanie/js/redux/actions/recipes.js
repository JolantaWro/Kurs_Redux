export const ADD_RECIPE = "ADD_RECIPE";

export const addRecipe = (recipe) => ({
    type: ADD_RECIPE,
    payload: {
        name: recipe.name,
        description: recipe.description,
        products: [...recipe.products]
    }
});