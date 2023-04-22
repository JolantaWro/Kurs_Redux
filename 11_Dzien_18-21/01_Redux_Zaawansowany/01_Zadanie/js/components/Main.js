import React from "react";
import Layout from "./Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllProducts from "../containers/Products/Products";
import AddProduct from "../containers/Products/Add";
import SingleProduct from "../containers/Products/SingleProduct";
import store from "../redux/store";
import {Provider} from "react-redux";
import Home from "../containers/Home";
import AddRecipe from "../containers/Recipes/Add";
import AllRecipes from "../containers/Recipes/Recipes";
import SingleRecipe from "../containers/Recipes/SingleRecipe";

const Main = () => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/products" element={<AllProducts />} />
                        <Route path="/products/:id" element={<SingleProduct/>} />
                        <Route path="/products/add" element={<AddProduct />} />
                        <Route path="/recipes/add" element={<AddRecipe />} />
                        <Route path="/recipes" element={<AllRecipes />} />
                        <Route path="/recipes/:id" element={<SingleRecipe />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    </>
)

export default Main;
