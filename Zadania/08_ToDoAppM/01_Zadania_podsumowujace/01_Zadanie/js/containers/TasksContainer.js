import React from 'react';
import {connect} from "react-redux";
import {addTask} from "../redux/actions";
import AllTasks from "../components/Task";
import AddTask from "../components/Task/AddTask";

const TasksContainer = ({tasks, addTask}) => {
    const handleSaveTask = (value) => {
        addTask(value)
    }

    return (
        <>
            <AllTasks tasks={tasks} />
            <AddTask onSubmitTask={handleSaveTask}/>
        </>
    );
};

const mapStateToProps = state => ({
    tasks: state.tasks,
    //dodac selektor na zrobione
    //dodac selektor na do zrobienia
})

const mapDispatchToProps = dispatch => ({
    addTask: (value)=> dispatch(addTask(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)