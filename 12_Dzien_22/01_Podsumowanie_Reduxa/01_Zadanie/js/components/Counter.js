// Counter
import React, {useEffect, useRef} from 'react';
import List from "./List";

const Counter = ({ isCounting, counterValue, listTime, addTimeToList, startCounterAsync, stopCounterAsync }) => {

    const myRef = useRef()
    console.log(myRef)

    // useEffect(() => {
    //     let intervalRunning;
    //     if(isCounting) {
    //         intervalRunning = setInterval(() => {
    //             addValue(1)
    //         }, 1000)
    //     }
    //     return () => clearInterval(intervalRunning)
    //
    // }, [isCounting])


    return (
        <div>
            {/*<button onClick={startCounter} ref={myRef}>start</button>*/}
            {/*<button onClick={stopCounter} ref={myRef}>stop</button>*/}
            <button onClick={startCounterAsync} ref={myRef}>start</button>
            <button onClick={stopCounterAsync} ref={myRef}>stop</button>
            <h1>{counterValue}</h1>
            <List listTime={listTime}  addTimeToList={ addTimeToList} />
        </div>
    );
};

export default Counter;