import React from 'react';

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
    product: state.products
});


export default connect(mapStateToProps)(AllProducts);