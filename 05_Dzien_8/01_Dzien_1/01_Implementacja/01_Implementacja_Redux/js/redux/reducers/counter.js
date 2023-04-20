/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */
import {DECREMENT, INCREMENT} from "../actions/counterActions";

const myState = 0;
const counterReducer = (state=myState, action) => {

    switch (action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state - action.payload;
        default:
            return state;
    }


};
export default counterReducer;

