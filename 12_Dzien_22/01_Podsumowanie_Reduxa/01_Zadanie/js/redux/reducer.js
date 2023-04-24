import { combineReducers } from "redux";
import {
    COUNTER_TICK,
    COUNTER_STARTED,
    COUNTER_STOPPED,
    ITEM_ADDED,
    ITEM_REMOVED, SET_VALUE,
} from "./actions";

const initialCounterState = { isCounting: false, value: 0, intervalId: null };

const counter = (state = initialCounterState, action) => {
    switch (action.type) {
        case COUNTER_STARTED:
            return {
                ...state,
                isCounting: true,
                intervalId: action.payload.intervalId,
            };

        case COUNTER_STOPPED:
            return { ...state, isCounting: false, intervalId: null };

        case COUNTER_TICK: {
            return { ...state, value: state.value + 1 };
        }
        case SET_VALUE: {
            return {...state, value: action.payload}
        }

        default:
            return state;
    }
};

const list = (state = [], action) => {
    switch (action.type) {
        case ITEM_ADDED:
            return [...state, action.payload.value];

        case ITEM_REMOVED:
            state.splice(action.payload.index, 1);
            return [...state];

        default:
            return state;
    }
};

export default combineReducers({
    counter,
    list,
});
