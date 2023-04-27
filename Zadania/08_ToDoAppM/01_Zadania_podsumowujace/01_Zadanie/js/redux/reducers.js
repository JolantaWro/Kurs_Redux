import {combineReducers} from "redux";
import {ADD_TASK, REMOVE_TASK} from "./actions";

function maxIdTasks(array) {
    const maxId = array.reduce((maxId, element) => Math.max(element.id, maxId), -1)
    return maxId + 1
}

const initialState = [
    // {title: "",
    // description: "",
    // open: true,
    // id: 0}
]

const reducerTask = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            const taskId = maxIdTasks(state)
            return [...state, {id: taskId, ...action.payload}]
        case REMOVE_TASK:
            return state.filter(element => element.id !== action.payload.id);
        default:
            return state
    }
}


// const products = (state= stateProduct, action) => {
//     console.log(state)
//     switch (action.type) {
//         case ADD_PRODUCT:
//             return [...state, action.payload]
//         case CHANGE_ORDER:
//             const newState = [...state];
//             const index = state.findIndex((element) => element === action.payload.product);
//             if(action.payload.action === "UP") {
//                 if(!index) {
//                     return state;
//                 }
//                 [newState[index - 1], newState[index]] = [newState[index], newState[index - 1]];
//             } else {
//                 if (index === newState.length - 1) {
//                     return state;
//                 }
//                 const choseElement = newState[index];
//                 newState.splice(index, 1);
//                 newState.splice(index+1, 0, choseElement);
//             }
//
//             return newState
//
//         default:
//             return state
//     }
// }
//
//


const rootReducer = combineReducers({
    tasks: reducerTask
});

export default rootReducer;