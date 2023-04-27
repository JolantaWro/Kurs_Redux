
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
// const CHANGE_ORDER = "CHANGE_ORDER";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});
export const removeTask = (task) => ({
    type: REMOVE_TASK,
    payload: task
});
//
// const changeOrder = ({product, action}) => ({
//     type: CHANGE_ORDER,
//     payload: {
//         product: product,
//         action: action
//     }
// })
//
