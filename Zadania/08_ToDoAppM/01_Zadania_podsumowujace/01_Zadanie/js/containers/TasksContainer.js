import React from 'react';
import {connect} from "react-redux";
import {addTask, removeTask} from "../redux/actions";
import AllTasks from "../components/Task";
import AddTask from "../components/Task/AddTask";

const TasksContainer = ({tasks, removeTask}) => {

    return (
        <>
            <AllTasks tasks={tasks} removeTask={removeTask} />
        </>
    );
};

const mapStateToProps = state => ({
    tasks: state.tasks,
})

const mapDispatchToProps = dispatch => ({
    removeTask: (task)=>dispatch(removeTask(task))
})


export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)