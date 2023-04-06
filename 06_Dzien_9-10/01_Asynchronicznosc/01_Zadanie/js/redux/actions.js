import api from "../api";

const QUOTE_FETCHING = "QUOTE_FETCHING";
const QUOTE_FETCHED = "QUOTE_FETCHED";
const QUOTE_ERROR = "QUOTE_ERROR";
const ADD_FAV = "ADD_FAV";

const startFetching = () => ({
    type: QUOTE_FETCHING
});

const quoteFetched = (value) => ({
    type: QUOTE_FETCHED,
    payload: {value}

});

const quoteError = (value) => ({
    type: QUOTE_ERROR,
    payload: value
});

const fetchQuote = () => (dispatch) => {
    dispatch(startFetching);
    api.fetchQuote()
        .then((response) => {
            dispatch(quoteFetched({response}))
        })
        .catch((err) => {
            quoteError(err)
        })

}

// const { results } = await (await.response).json();

export { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV, startFetching, quoteError, quoteFetched, fetchQuote }
