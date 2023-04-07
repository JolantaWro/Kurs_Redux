import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducer";
import logger from "./middlewares";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
