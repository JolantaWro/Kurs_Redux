import {combineReducers} from "redux";
import {ADD_TIME, ADD_VALUE, REMOVE_TIME, START_COUNTER, STOP_COUNTER} from "./actions";


const initialState = {
    isCounting: false,
    value: 0
}
const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case START_COUNTER:
            return {
                isCounting: true,
                value: state.value + 1
            }
        case STOP_COUNTER:
            return {
                ...state,
                isCounting: false
            }
        // case ADD_VALUE:
        //     return {
        //         ...state,
        //         value: state.value + 1
        //     }
        default:
            return state
    }

}

const listReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TIME:
            return [...state, action.payload]
        case REMOVE_TIME:
            return state.filter(element => element.id !== action.payload.id)
        default:
            return state
    }
}





const rootReducer = combineReducers({
    counter: counterReducer,
    list: listReducer
});

export default rootReducer;
