import React from 'react';
import {Link} from "react-router-dom";

const Do = ({taskToDo}) => {

    return (
        <div>
            {taskToDo.length === 0 && <div className="panel-block">Brak wpisów!</div>}

            {taskToDo.length > 0 && taskToDo.map(el => (<li key={el.id}>{el.title}<br/>{el.description}</li>))}

                {/*// <Link to={`/do/${el.id}`} className="panel-block" key={el.id}>*/}
                {/*//     <span className="panel-icon"><i className={`fas fa-${iconName}`}/></span>*/}
                {/*//     {el.title}*/}
                {/*// </Link>*/}
            {/*))}*/}
            {/*{!taskToDo ? <h2 className="card-title">Brak zadań</h2> : taskToDo.map((element, index) => <li key={index}>{element.title}<br/>{element.description}</li>)}*/}
        </div>
    );
};

export default Do;