
import React from 'react';

const List = ({listTime, addTimeToList, counterValue}) => {

    return (
        <div>
            <button onClick={()=> console.log("Zapisz")}>zapisz</button>
            <ul>
                {listTime.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
        </div>
    );
};

export default List;
