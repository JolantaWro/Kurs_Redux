import React, {useEffect, useState} from "react";
import Form from "./Form";
import List from "./List";


const Cart = ({ products, sum, addProduct, removeProduct }) => {
    console.log(sum)
    const [sumValue, setSum] = useState(sum)




    return(
          <div>
              <Form addProduct={addProduct} />
              <List removeProduct={removeProduct} products={products} />
              <h1>Do zapłaty: {sum} PLN</h1>
          </div>
      )
}



export default Cart;
