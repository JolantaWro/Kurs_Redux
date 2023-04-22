import React from 'react';
import AllProducts from "../../components/Products";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    allProducts: state.products
});


export default connect(mapStateToProps)(AllProducts);