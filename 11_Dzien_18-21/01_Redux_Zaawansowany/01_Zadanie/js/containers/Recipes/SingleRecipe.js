import React from 'react';
import {connect} from "react-redux";
import SingleRecipe from "../../components/Recipes/SingleRecipe";



const mapStateToProps = state => ({
    allRecipes: state.recipes
});

export default connect(mapStateToProps)(SingleRecipe);