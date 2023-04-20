const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_PRODUCT = "ADD_PRODUCT";
const CHANGE_ORDER = "CHANGE_ORDER";


const increment = (updateValue) => ({
    type: INCREMENT,
    payload: updateValue
});

const decrement = (updateValue) => ({
    type: DECREMENT,
    payload: updateValue
});


const addProduct = (updateValue) => ({
    type: ADD_PRODUCT,
    payload: updateValue
})

const changeOrder = ({product, action}) => ({
    type: CHANGE_ORDER,
    payload: {
        product: product,
        action: action
    }
})

export { INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER, increment, decrement, addProduct, changeOrder };