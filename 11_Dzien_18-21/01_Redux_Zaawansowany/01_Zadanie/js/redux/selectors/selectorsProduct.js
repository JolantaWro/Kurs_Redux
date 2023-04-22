import { createSelector } from 'reselect'


export const productsSelector = state => state.products

export const getProduct = (products, selector) => {
    return products.filter(element => element.id === selector)
};

export const lastAddProducts = createSelector(
    productsSelector,
    (products) => products.slice(-5)
);