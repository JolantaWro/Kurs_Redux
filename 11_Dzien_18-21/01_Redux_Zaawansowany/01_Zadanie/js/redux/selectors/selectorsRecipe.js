import { createSelector } from 'reselect'


export const recipesSelector = state => state.recipes


export const lastAddRecipes = createSelector(
    recipesSelector,
    (recipes) => recipes.slice(-5)
);