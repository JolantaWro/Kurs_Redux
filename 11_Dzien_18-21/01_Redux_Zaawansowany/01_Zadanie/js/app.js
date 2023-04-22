import React from "react";
import Main from "./components/Main";
import {createRoot} from "react-dom/client";

// import "@bulma"


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Main />);

// ReactDOM.render(<Main />, document.getElementById("app"));