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


const rocketAsync = () => {
    return function(dispatch) {
        setTimeout(() => dispatch(decrementCounter()), 1000);
        setTimeout(() => dispatch(decrementCounter()), 2000);
        setTimeout(() => dispatch(decrementCounter()), 3000);
        setTimeout(() => dispatch(decrementCounter()), 4000);
        setTimeout(() => dispatch(decrementCounter()), 5000);
        setTimeout(function() {
            dispatch(startLaunching())
        }, 5000);

    }
};

export { LAUNCHING, LAUNCHED, DECREMENT, startLaunching, launchedRocket, decrementCounter, rocketAsync }