import React from 'react';
import {connect} from "react-redux";
import {addTime} from "../redux/actions";
import List from "../components/List";


const mapStateToProps = state => ({
    listTime: state.list,
    counterValue: state.counter.value
});

const mapDispatchToProps = dispatch => ({
    addTimeToList: (value) => dispatch(addTime(value))
});




export default connect(mapStateToProps, mapDispatchToProps)(List);
