/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */
import {combineReducers} from "redux";
import counterReducer from "./counter";
import bankReducer from "./bank";

const combinedReducer = combineReducers({
    counter: counterReducer,
    balance: bankReducer
});

export default combinedReducer;
