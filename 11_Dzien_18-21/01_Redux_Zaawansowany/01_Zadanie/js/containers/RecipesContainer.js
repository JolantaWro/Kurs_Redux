import React from 'react';
import AllRecipes from "../components/Recipes";
import AddRecipe from "../components/Recipes/Add";
import {connect} from "react-redux";
import {addRecipe} from "../redux/actions/recipes";

const RecipesContainer = ({allRecipes, onRecipeAdd}) => {

    const handleNewRecipe = (value) => {
        onRecipeAdd(value)
    }

    return (
        <>
            <AllRecipes allRecipes={allRecipes}/>
            <AddRecipe onSaveRecipe={handleNewRecipe}/>
        </>
    );
};

const mapStateToProps = state => ({
    allRecipes: state.recipes
});

const mapDispatchToProps = dispatch => ({
    onRecipeAdd: (value) => dispatch(addRecipe(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);