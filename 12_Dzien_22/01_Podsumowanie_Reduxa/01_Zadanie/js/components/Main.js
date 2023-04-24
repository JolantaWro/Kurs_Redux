import React from "react";
import {Provider} from "react-redux";
import Counter from "../containers/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "../containers/List";
import store from "../redux/store"

const Main = () => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Counter />} />
                    <Route path="/list" element={<List />} />
                </Routes>

            </BrowserRouter>
        </Provider>
    </>
)

export default Main;
