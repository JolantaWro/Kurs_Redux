import React from 'react';
import {connect} from "react-redux";
import SingleProduct from "../../components/Products/SingleProduct";
import {productsSelector} from "../../redux/selectors/selectorsProduct";

const mapStateToProps = state => ({
    allProducts: productsSelector(state)
});

export default connect(mapStateToProps)(SingleProduct);