import React from "react";
import {rocketAsync} from "../redux/actions";
import Platform from "../components/Platform";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    launched: state.rocket.launched,
    counter: state.rocket.counter
});

const mapDispatchToProps = dispatch => ({
    deploy: ()=> dispatch(rocketAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Platform)
