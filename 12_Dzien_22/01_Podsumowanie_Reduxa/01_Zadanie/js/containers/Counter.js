import React, {useRef, useState} from 'react';
import Counter from "../components/Counter"
import {connect} from "react-redux";
import {addTime, counterAsync, counterAsyncStop, startCounter, stopCounter} from "../redux/actions";


const CounterContainer = (props) => {
    const [visible, setVisible] = useState(true);
    const myRef = useRef()


    // const changeVisible = () => {
    //     myRef.current.style.disabled = visible
    // }

    // const handleStartRun = () => {
    //     props.startCounter();
    //     myRef.current.style.disabled = visible;
    //     setVisible(false)
    // }
    //
    // const handleStopRun = () => {
    //     props.stopCounter();
    //     myRef.current.style.disabled = visible
    //     setVisible(true)
    // }




    return (
        <>
            <Counter {...props}/>
        </>
    );
};

const mapStateToProps = state => ({
    isCounting: state.counter.isCounting,
    counterValue: state.counter.value,
    listTime: state.list
});

const mapDispatchToProps = dispatch => ({
    startCounterAsync: () => dispatch(counterAsync()),
    stopCounterAsync: () => dispatch(counterAsyncStop()),
    // startCounter: () => dispatch(startCounter()),
    // stopCounter: () => dispatch(stopCounter()),
    // addValue: (value) => dispatch(addValue(value)),
    addTimeToList: (value) => dispatch(addTime(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
