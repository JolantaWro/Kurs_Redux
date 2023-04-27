import React from 'react';
import {Link} from "react-router-dom";


const AllTasks = ({tasks, removeTask}) => {

    return (
        <>
            {tasks.length === 0 && <div className="panel-block">Brak wpisów!</div>}


            {tasks.length > 0 && tasks.map(el => (<>
                <Link to={`/${el.id}`} key={el.id}>{el.title}<br/>{el.description}</Link>
                <button onClick={() => removeTask(el)}>Usuń</button></>
            ))}
        </>
    );
};

export default AllTasks;