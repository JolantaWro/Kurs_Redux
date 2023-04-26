import {Provider} from "react-redux";
import Main from "./components/Main";
import React from "react";
import store from "./redux/store"
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <Main />
    </Provider>)