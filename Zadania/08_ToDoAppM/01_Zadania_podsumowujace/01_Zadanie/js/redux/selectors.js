export const tasksSelector = state => state.tasks
export const tasksDoneSelector = (tasks) => {
    return tasks.filter(item => item.open === false)
}

export const tasksToDoSelector = (tasks) => {
    return tasks.filter(item => item.open === true)
}
export const getTask = (task, selector) => {
    return task.filter(element => element.id === selector)
};

//const selectProducts = (state) => {
//     let price = useParams()
//     try {
//         price = price.price
//         console.log(price)
//         return state.items.filter(item => item.price <= price)
//     } catch {
//         return state.items
//     }
// }