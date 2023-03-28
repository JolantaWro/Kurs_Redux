/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
const createStore = (reducer, initialState) => {
    let currentState = initialState;
    let listeners = [];

    return{
        dispatch(action) {
            currentState = reducer(currentState, action);
            listeners.forEach((listenerFunction) => listenerFunction())
        },
        getState() {
            return currentState;
        },
        subscribe(listener) {
            listeners.push(listener)
            return function () {
                listeners = listeners.filter((l) => l!== listener)
            }
        }
    }
}

export { createStore };
