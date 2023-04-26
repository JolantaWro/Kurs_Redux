import React from 'react';
import {useParams} from "react-router-dom";
import {getTask} from "../../redux/selectors";

const SingleTask = ({allTasks}) => {
    console.log(allTasks)

    const {id} = useParams()
    console.log(id)
    const filteredTasks = getTask(allTasks, parseInt(id))

    return (
        <div>
            {filteredTasks.length === 0 && <div className="panel-block">Brak wpisów!</div>}

            {filteredTasks.length > 0 && <li key={filteredTasks.id}>{filteredTasks.title}<br/>{filteredTasks.description}</li>}

        </div>
    );
};

export default SingleTask;