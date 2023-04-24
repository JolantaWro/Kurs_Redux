export const COUNTER_TICK = "@counter/counter-tick";
export const COUNTER_STARTED = "@counter/counter-started";
export const COUNTER_STOPPED = "@counter/counter-stopped";

export const tick = () => ({ type: COUNTER_TICK });

export const startCounter = () => (dispatch) => {
    const intervalId = setInterval(() => dispatch(tick()), 1000);
    dispatch({ type: COUNTER_STARTED, payload: { intervalId } });
};

export const stopCounter = () => (dispatch, getState) => {
    const intervalId = getState().counter.intervalId;
    clearInterval(intervalId);
    dispatch({ type: COUNTER_STOPPED });
};
export const ITEM_ADDED = "@list/item-added";
export const ITEM_REMOVED = "@list/item-removed";

export const addItem = () => (dispatch, getState) => {
    dispatch({
        type: ITEM_ADDED,
        payload: { value: getState().counter.value },
    });
};

export const removeItem = (index) => ({
    type: ITEM_REMOVED,
    payload: { index },
});