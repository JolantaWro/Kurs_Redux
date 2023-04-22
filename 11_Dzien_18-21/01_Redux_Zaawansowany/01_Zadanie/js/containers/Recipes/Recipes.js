import React from 'react';
import {connect} from "react-redux";
import AllRecipes from "../../components/Recipes";

const mapStateToProps = state => ({
    allRecipes: state.recipes
});


export default connect(mapStateToProps)(AllRecipes);