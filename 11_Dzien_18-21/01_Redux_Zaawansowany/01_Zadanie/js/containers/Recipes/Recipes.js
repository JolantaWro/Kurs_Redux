import React from 'react';
import AllRecipes from "../../components/Recipes";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    allRecipes: state.recipes
});


export default connect(mapStateToProps)(AllRecipes);