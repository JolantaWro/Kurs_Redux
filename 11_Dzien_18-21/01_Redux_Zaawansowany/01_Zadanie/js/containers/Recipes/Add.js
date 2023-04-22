import {connect} from "react-redux";
import React from 'react';
import AddRecipe from "../../components/Recipes/Add";
import {addRecipe} from "../../redux/actions/recipes";


const mapStateToProps = state => ({
    allProducts: state.products
});
const mapDispatchToProps = dispatch => ({
    onRecipeAdd: (value) => dispatch(addRecipe(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);