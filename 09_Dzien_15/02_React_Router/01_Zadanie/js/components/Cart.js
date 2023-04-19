import React from "react";
import Form from "./Form";
import List from "./List";
import {Link, useParams} from "react-router-dom";

const Cart = ({ products, sum, addProduct, removeProduct }) => {
    const { filterValue } = useParams();

    console.log(filterValue)
    console.log(useParams())



    return(
          <div>
                <Link to={"/"}>Wszystkie</Link><br />
                <Link to={"/10"}>do 10zł</Link><br />
                <Link to={"/50"}>do 50zł</Link><br />
                <Link to={"/100"}>do 100zł</Link><br />
                <Form addProduct={addProduct} />
                <List removeProduct={removeProduct} products={products} />
                <h1>Do zapłaty: {sum} PLN</h1>
          </div>
      )
}



export default Cart;
