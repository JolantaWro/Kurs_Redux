import React from "react";
import Counter from "../containers/Counter";
import List from "../containers/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Main = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Counter/>} />
                <Route path="/:number" element={<Counter/>} />
            </Routes>
            <List />
        </BrowserRouter>
    </>
);

export default Main;
