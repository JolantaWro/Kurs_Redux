import React from "react";
import Layout from "./Layout";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import AddRecipe from "./Recipes/Add";
import Home from "./Home";
import AllProducts from "../containers/Products";
import AddProduct from "../containers/AddProductContainer";
import SingleProduct from "./Recipes/SingleProduct";

const Main = () => (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/products" element={<ProductsContainer />} /> */}
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/products/:id" element={<SingleProduct/>} />
                    {/* <Route path="/products/add" element={<AddProduct />} /> */}
                    <Route path="/products/add" element={<AddProduct />} />
                    <Route path="/recipes" element={<RecipesContainer />} />
                    <Route path="/recipes/add" element={<AddRecipe />} />
                    {/*<Route path="/recipes/:id" element={<SingleRecipe/>}/>*/}
                </Routes>
            </Layout>
        </BrowserRouter>
    </>
)

export default Main;
