// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować
import { createSelector } from 'reselect'


export const productsSelector = state => state.products
export const sumPriceSelector = createSelector(
    productsSelector,
    products=> products.reduce((acc, item) => (
        acc + item.price
    ), 0)
)
