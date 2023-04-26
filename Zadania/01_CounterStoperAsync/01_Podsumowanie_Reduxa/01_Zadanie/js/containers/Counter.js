import { connect } from "react-redux";
import { Counter } from "../components/Counter";
import {setValue, startCounter, stopCounter} from "../redux/actions";
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const mapStateToProps = (state) => ({
    value: state.counter.value,
    isCounting: state.counter.isCounting,
});

const mapDispatchToProps = (dispatch) => ({
    startCounter: () => dispatch(startCounter()),
    stopCounter: () => dispatch(stopCounter()),
    setNewValue: (value)=> dispatch(setValue(value))
});



const CounterContainer = (props) => {
    const { number } = useParams();

    if(number) {
        useEffect(() => {
            props.setNewValue(parseInt(number))
        }, [number]);
    }


    return (
        <div>
            <Counter {...props}/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
