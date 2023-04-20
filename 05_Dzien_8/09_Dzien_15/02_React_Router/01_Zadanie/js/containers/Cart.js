


// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);
import React from 'react';
import {connect} from "react-redux";
import Cart from "../components/Cart";
import {addProduct, removeProduct} from "../redux/actions";
import {getPriceValue, productsSelector, sumPriceSelector} from "../redux/selectors";





const mapStateToProps = state => ({
    products: productsSelector(state),
    sum: sumPriceSelector(state)
});

//values: state.routes

const mapDispatchToProps = dispatch => ({
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: (product) => dispatch(removeProduct(product)),
    // filterPrice: (value) => dispatch(getPriceValue(value))


});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);