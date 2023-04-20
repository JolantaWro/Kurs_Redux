import React from "react";
import { createRoot } from "react-dom/client";
import Cart from "./containers/Cart";
import store from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="" element={<Cart />} />
                    <Route path="/:filterValue" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>)

