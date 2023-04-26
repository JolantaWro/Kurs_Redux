import React from 'react';
import {connect} from "react-redux";
import SingleTask from "../components/Task/SingleTask";
const mapStateToProps = state => ({
    allTasks: state.tasks
});

export default connect(mapStateToProps)(SingleTask);