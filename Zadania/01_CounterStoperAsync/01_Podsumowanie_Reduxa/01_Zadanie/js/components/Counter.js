import React from "react";
import {useNavigate} from "react-router-dom";

export const Counter = ({ value, startCounter, stopCounter, isCounting }) => {

    return (
        <>
            <button onClick={() => startCounter()} disabled={isCounting}>
                start
            </button>
            <button onClick={() => stopCounter()} disabled={!isCounting}>
                stop
            </button>
            <h3>{value}</h3>
        </>
    );
};