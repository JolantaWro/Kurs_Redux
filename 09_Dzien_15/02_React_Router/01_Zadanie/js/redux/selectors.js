// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować
import { createSelector } from 'reselect'


export const productsSelector = state => state.products


export const filteredProducts = (products, selector) => {
    return products.filter(element => element.price <= parseInt(selector))
};

export const sumPriceSelector = createSelector(
    productsSelector,
    products=> products.reduce((acc, item) => (
        acc + Number(item.price)
    ), 0)
);