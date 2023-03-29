/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */
import {DEPOSIT, WITHDRAW} from "../actions/bankActions";

const initialState = 0;

function bankReducer(state=initialState, action) {
    switch(action.type) {
        case DEPOSIT:
            return state + action.payload;
        case WITHDRAW:
            if (state - action.payload < 0) {
                return state
            }
            return state - action.payload;
        default:
            return state
    }
}
export default bankReducer;