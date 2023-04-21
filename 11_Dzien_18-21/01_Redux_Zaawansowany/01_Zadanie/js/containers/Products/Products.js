import React from 'react';
import AllProducts from "../../components/Products";
import {connect} from "react-redux";


// const Products = ({ allProducts }) => {
//
//     return (
//         <>
//             <AllProducts allProducts={allProducts} />
//         </>
//     );
// };

const mapStateToProps = state => ({
    allProducts: state.products
});


export default connect(mapStateToProps)(AllProducts);