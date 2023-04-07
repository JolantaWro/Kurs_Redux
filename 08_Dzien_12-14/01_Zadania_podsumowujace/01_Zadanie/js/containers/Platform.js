import React from "react";
import {rocketAsync} from "../redux/actions";
import Platform from "../components/Platform";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    launched: state.launched,
    counter: state.counter
});


const mapDispatchToProps = dispatch => ({
    deploy: ()=> dispatch(rocketAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Platform)
