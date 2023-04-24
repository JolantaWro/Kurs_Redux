


import React from 'react';
import {connect} from "react-redux";
import Home from "../components/Home";
import {lastAddProducts} from "../redux/selectors/selectorsProduct";
import {lastAddRecipes} from "../redux/selectors/selectorsRecipe";

const mapStateToProps = state => ({
    allProducts: state.products,
    lastProducts: lastAddProducts(state),
    lastRecipes: lastAddRecipes(state)
});


export default connect(mapStateToProps)(Home);