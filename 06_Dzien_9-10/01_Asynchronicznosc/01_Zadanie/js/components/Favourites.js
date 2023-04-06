//
// Favourites.propTypes = {
//   quotes: PropTypes.array.isRequired
// };

import Favourites from "../containers/Favourites";
import React from 'react';

const Favourites = (props) =>
    <ul>
        {props.favourites.list.map((element, index) => <li kay={index}>{element}</li>)}
    </ul>

export default Favourites;
