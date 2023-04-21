import React from "react";
import Layout from "./Layout";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../redux/store"
import Panel from "./Panel";
import AllProducts from "./Products";
import AddProduct from "./Products/Add";
import AllRecipes from "./Recipes";
import AddRecipe from "./Recipes/Add";
import Home from "./Home";

const Main = () => (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/products/add" element={<AddProduct />} />
                    <Route path="/recipes" element={<AllRecipes />} />
                    <Route path="/recipes/add" element={<AddRecipe />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </>
)

export default Main;
