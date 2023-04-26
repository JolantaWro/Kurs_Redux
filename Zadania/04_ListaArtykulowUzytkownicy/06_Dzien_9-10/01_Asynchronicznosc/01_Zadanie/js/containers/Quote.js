import React from "react";
import {addToFavourites, fetchQuoteAsync} from "../redux/actions";
import {connect} from "react-redux";
import Quote from "../components/Quote";

const mapStateToProps = state => ({
    quote: state.quote.quote,
    loading: state.quote.loading,
    error: state.quote.error
})

const mapDispatchToProps = dispatch => ({
    fetchQuote: () => dispatch(fetchQuoteAsync()),
    addFavourites: (quote) => dispatch(addToFavourites(quote))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote)