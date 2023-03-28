// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


const increment = (updateValue) => ({
    type: INCREMENT,
    payload: updateValue
})

const decrement = (updateValue) => ({
    type: DECREMENT,
    payload: updateValue
});


export { INCREMENT, DECREMENT, increment, decrement }
