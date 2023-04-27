const LAUNCHING = "LAUNCHING";
const DECREMENT = "DECREMENT";
const startLaunching = () => ({
    type: LAUNCHING
});

const decrementCounter = () => ({
    type: DECREMENT
})

// const rocketAsync = () => {
//     return function(dispatch) {
//         setTimeout(() => dispatch(decrementCounter()), 1000);
//         setTimeout(() => dispatch(decrementCounter()), 2000);
//         setTimeout(() => dispatch(decrementCounter()), 3000);
//         setTimeout(() => dispatch(decrementCounter()), 4000);
//         setTimeout(() => dispatch(decrementCounter()), 5000);
//         setTimeout(function() {
//             dispatch(startLaunching())
//         }, 5000);
//
//     }
// };
const rocketAsync = () => {
    return async function(dispatch, getState) {
        const counterInterval = setInterval(()=> {
            dispatch(decrementCounter());
            let valueCounter = getState().rocket.counter;
            if(valueCounter === 0) {
                clearInterval(counterInterval)
                dispatch(startLaunching())
            }
        }, 1000)

    }
};

export { LAUNCHING, DECREMENT, startLaunching, decrementCounter, rocketAsync }