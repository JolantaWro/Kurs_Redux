import React from "react";
import Main from "./components/Main";
import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from './redux/store'


// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<Main />
// )
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("app"));