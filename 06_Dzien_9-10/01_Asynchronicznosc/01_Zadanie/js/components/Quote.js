import React from "react";


const Quote = ({quote, loading, error, fetchQuote, addFavourites}) => {

    return  (
        <div>
            <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
            {quote && <p>{quote.quote} / {quote.author}</p>}
            {loading && "Ładuję cytat..."}
            {error && error}
            {quote && <button onClick={()=>addFavourites(quote)}>Dodaj do ulubionych</button>}
        </div>
    )
}





export default Quote;
