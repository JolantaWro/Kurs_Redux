const QUOTE_FETCHING = "QUOTE_FETCHING";
const QUOTE_FETCHED = "QUOTE_FETCHED";
const QUOTE_ERROR = "QUOTE_ERROR";

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

export { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, startFetching, quoteError, quoteFetched }
