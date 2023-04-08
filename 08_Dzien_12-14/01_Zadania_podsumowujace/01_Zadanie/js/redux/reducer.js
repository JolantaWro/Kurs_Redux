import {DECREMENT, LAUNCHING} from "./actions";
import {combineReducers} from "redux";

const initialState = {
    launched: false,
    counter: 5
}

const reducerLaunched = (state=initialState, action) => {
    switch(action.type) {
        case LAUNCHING:
            return {
                ...state,
                launched: true
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    rocket: reducerLaunched
})
