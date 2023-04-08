import React from "react";
import {rocketAsync} from "../redux/actions";
import Platform from "../components/Platform";
import {connect} from "react-redux";
import store from "../redux/store";

const mapStateToProps = state => ({
    launched: state.rocket.launched,
    counter: state.counter
});

console.log("Moj", store.getState() )

const mapDispatchToProps = dispatch => ({
    deploy: ()=> dispatch(rocketAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Platform)
