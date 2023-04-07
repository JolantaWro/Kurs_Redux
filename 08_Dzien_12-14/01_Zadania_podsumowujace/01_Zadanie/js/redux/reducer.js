import {DECREMENT, LAUNCHED, LAUNCHING} from "./actions";
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
        case LAUNCHED:
            return {
                ...state,
                launched: false
            }
        default:
            return state
    }
}

const reducerCounter = (state=0, action) => {
    switch(action.type) {
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    rocket: reducerLaunched,
    counter: reducerCounter
})
