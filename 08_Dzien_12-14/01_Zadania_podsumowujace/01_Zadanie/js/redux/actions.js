
const LAUNCHING = "LAUNCHING";
const LAUNCHED = "LAUNCHED";
const DECREMENT = "DECREMENT";

const startLaunching = () => ({
    type: LAUNCHING
})

const launchedRocket = () => ({
    type: LAUNCHED
})

const decrementCounter = () => ({
    type: DECREMENT
})


// store.dispatch({ type: DECREMENT }); // (1)
//
// store.dispatch(function (dispatch) {
//     dispatch({ type: DECREMENT }); // (2)
//     setTimeout(() => dispatch({ type: DECREMENT }), 1000); // (3)
//     setTimeout(() => dispatch({ type: DECREMENT }), 2000); // (3)
//     setTimeout(() => dispatch({ type: DECREMENT }), 3000); // (3)
// });

export { LAUNCHING, LAUNCHED, DECREMENT, startLaunching, launchedRocket, decrementCounter }