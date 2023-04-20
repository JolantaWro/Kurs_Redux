import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import logger from "./middlewares";


const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
