// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// należy dodać kreatory akcji i je eksportować

export const ADD_PRODUCT = "ADD_PRODUCT";
export const FILTER_PRODUCT = "FILTER_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    payload: product
})

export const filterProduct = (product) => ({
    type: REMOVE_PRODUCT,
    payload: product
})