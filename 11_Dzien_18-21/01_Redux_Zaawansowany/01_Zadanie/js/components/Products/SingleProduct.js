import React, {useState} from 'react';
import {useParams} from "react-router-dom";


const SingleProduct = ({ allProducts }) => {

    const [idProduct, setIdProduct] = useState(useParams().id)
    //
    // const filteredState = getProduct(allProducts, parseInt(idProduct));
    // const product = filteredState[0]

    return (
        <div>
            <article className="message is-dark">
                <div className="message-header">
                    <p>Produkt {parseInt(idProduct) + 1}</p>
                    <button type="button" className="delete" onClick={() => null} />
                </div>
                <div className="message-body">
                    <div className="field">
                        <p className="control has-icons-left">
            <span className="select">
              <select onChange={(e) => setIdProduct(e.target.value)} value={idProduct}>
                <option>Wybierz...</option>
                  {allProducts.map(product => (
                      <option key={product.id} value={product.id}>{product.name}</option>
                  ))}
              </select>
            </span>
                            <span className="icon is-small is-left"><i className="fas fa-pizza-slice"></i></span>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default SingleProduct;