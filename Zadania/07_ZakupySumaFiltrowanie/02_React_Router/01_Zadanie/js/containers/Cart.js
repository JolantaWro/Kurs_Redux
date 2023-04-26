import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import Cart from "../components/Cart";
import {addProduct, removeProduct} from "../redux/actions";
import {filteredProducts, productsSelector, sumPriceSelector} from "../redux/selectors";



const mapStateToProps = state => ({
    products: productsSelector(state),
    sum: sumPriceSelector(state)
});


const mapDispatchToProps = dispatch => ({
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: (product) => dispatch(removeProduct(product)),
});


const CartContainer = (props) => {
    const { filterValue } = useParams();
    const filteredProduct = filteredProducts(props.products, filterValue)

    const suma = filteredProduct.reduce((acc, item) => (
        acc + Number(item.price)
    ), 0)



    return (
        <>
            {filterValue ? <Cart { ...props} products={filteredProduct} sum={suma} /> :  <Cart { ...props} />}
        </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
