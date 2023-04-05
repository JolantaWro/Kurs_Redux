import {QUOTE_ERROR, QUOTE_FETCHED, QUOTE_FETCHING} from "./actions";
import {combineReducers} from "redux";


const initialState = {
    loading: false,
    error: "",
    quote: null
}

function reducerQuote (state=initialState, action) {
    switch (action.type){
        case QUOTE_FETCHING:
            return {
                ...state,
                loading: true
            }
        case QUOTE_FETCHED:
            return {
                loading: false,
                quote: action.payload,
                error: null
            }
        case QUOTE_ERROR:
            return {
                loading: false,
                quote: null,
                error: action.payload
            }
        default:
            return state
    }
}

const rootReducers = combineReducers({
    quote: reducerQuote
})

export default rootReducers;
