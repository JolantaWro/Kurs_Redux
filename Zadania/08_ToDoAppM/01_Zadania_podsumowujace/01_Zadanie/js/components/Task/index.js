import React from 'react';
import AddTask from "./AddTask";

const AllTasks = ({tasks}) => {



    return (
        <>
            {!tasks ? <h2>Brak zadań</h2> : tasks.map((element, index) => <li key={index}>{element.title}<br/>{element.description}</li>)}
        </>
    );
};

export default AllTasks;