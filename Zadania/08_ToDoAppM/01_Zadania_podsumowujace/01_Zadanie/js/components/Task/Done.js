import React from 'react';

const Done = ({taskDone}) => {

    return (
        <div>
            {taskDone.length === 0 && <div className="panel-block">Brak wpisów!</div>}

            {taskDone.length > 0 && taskDone.map(el => (<li key={el.id}>{el.title}<br/>{el.description}</li>))}
        </div>
    );
};

export default Done;