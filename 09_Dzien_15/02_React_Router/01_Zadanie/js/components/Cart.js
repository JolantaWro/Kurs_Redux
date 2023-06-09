import Form from "./Form";
import List from "./List";
import React from 'react'


const Cart = ({ products, sum, addProduct, removeProduct }) => {


    return(
        <div>
            <Form addProduct={addProduct} />
            <List removeProduct={removeProduct} products={products} />
            <h1>Do zapłaty: {sum} PLN</h1>
        </div>
    )
}



export default Cart;
