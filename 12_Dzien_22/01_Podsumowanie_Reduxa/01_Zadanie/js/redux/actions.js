export const START_COUNTER = "START_COUNTER"
export const STOP_COUNTER = "STOP_COUNTER"
// export const ADD_VALUE = "ADD_VALUE"

export const ADD_TIME = "ADD_TIME";
export const REMOVE_TIME = "REMOVE_TIME";

export const startCounter = () => ({
    type: START_COUNTER
});

export const stopCounter = () => ({
    type: STOP_COUNTER
});

export const addTime = (value) => ({
    type: ADD_TIME,
    payload: value
});

// export const addValue = (value) => ({
//     type: ADD_TIME,
//     payload: value
// });

export const removeTime = (value) => ({
    type: REMOVE_TIME,
    payload: value
});

export const counterAsync = () => {
    return async function(dispatch, getState) {
        const counterInterval = setInterval(() => {
            dispatch(startCounter());
            let counting = getState().counter.isCounting;
            console.log(counting)
            if(!counting) {
                clearInterval(counterInterval);
            }
        }, 1000)

    }
}

export const counterAsyncStop = () => {
    return async function(dispatch) {
        dispatch(stopCounter())
    }
}


