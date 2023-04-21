import React from 'react';
import AllProducts from "../components/Products";
import {connect} from "react-redux";
import {addProduct} from "../redux/actions/products";
import AddProduct from "../components/Products/Add";
import SingleProduct from "../components/Recipes/SingleProduct";

const ProductsContainer = ({allProducts, onProductAdd }) => {
    const handleNewProduct = (value) => {
        onProductAdd(value)
    }


    return (
        <>
            <AllProducts allProducts={allProducts} />
            <AddProduct onSaveProduct={handleNewProduct} allProducts={allProducts} />
        </>
    );
};

const mapStateToProps = state => ({
    allProducts: state.products
});

const mapDispatchToProps = dispatch => ({
    onProductAdd: (value) => dispatch(addProduct(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
