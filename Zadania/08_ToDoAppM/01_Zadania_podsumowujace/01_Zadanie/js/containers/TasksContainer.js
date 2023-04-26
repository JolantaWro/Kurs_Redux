import React from 'react';
import {connect} from "react-redux";
import {addTask} from "../redux/actions";
import AllTasks from "../components/Task";
import AddTask from "../components/Task/AddTask";

const TasksContainer = ({tasks}) => {

    return (
        <>
            <AllTasks tasks={tasks} />
        </>
    );
};

const mapStateToProps = state => ({
    tasks: state.tasks,
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)