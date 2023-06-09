import AddProduct from "../../components/Products/Add";
import {addProduct} from "../../redux/actions/products";
import {connect} from "react-redux";
import React from 'react';

const mapDispatchToProps = dispatch => ({
    onProductAdd: (value) => dispatch(addProduct(value))
});

export default connect(null, mapDispatchToProps)(AddProduct);