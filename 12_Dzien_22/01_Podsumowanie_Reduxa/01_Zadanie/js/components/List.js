import React from "react";

export const List = ({ list, save, remove }) => (
    <>
        <button onClick={() => save()}>Zapisz</button>
        <ul>
            {list.map((el, idx) => (
                <li key={idx} onClick={() => remove(idx)}>
                    {el}
                </li>
            ))}
        </ul>
    </>
);
