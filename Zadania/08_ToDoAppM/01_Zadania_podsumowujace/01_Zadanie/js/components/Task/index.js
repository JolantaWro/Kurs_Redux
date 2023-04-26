import React from 'react';


const AllTasks = ({tasks}) => {

    return (
        <>
            {tasks.length === 0 && <div className="panel-block">Brak wpisów!</div>}

            {tasks.length > 0 && tasks.map(el => (<li key={el.id}>{el.title}<br/>{el.description}</li>))}
        </>
    );
};

export default AllTasks;