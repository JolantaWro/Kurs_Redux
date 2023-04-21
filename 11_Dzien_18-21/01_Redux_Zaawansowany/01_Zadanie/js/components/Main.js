import React from "react";
import Layout from "./Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddRecipe from "./Recipes/Add";
import Home from "./Home";
import AllProducts from "../containers/Products/Products";
import AddProduct from "../containers/Products/Add";
import SingleProduct from "./Recipes/SingleProduct";
import AllRecipes from "../containers/Recipes/Recipes";

const Main = () => (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/products/:id" element={<SingleProduct/>} />
                    <Route path="/products/add" element={<AddProduct />} />
                    <Route path="/recipes/add" element={<AddRecipe />} />
                    <Route path="/recipes" element={<AllRecipes />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </>
)

export default Main;
