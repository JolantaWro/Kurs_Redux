


import React from "react";

const List = ({ products, removeProduct, filterValue }) => {

    return (
        <ul>
            {products.map((product) => (
                <li key={product.name}>
                    {product.name} - {product.price} PLN
                    <button onClick={() => removeProduct(product)}>Usuń</button>
                </li>
            ))}
        </ul>
    )
}


export default List;
