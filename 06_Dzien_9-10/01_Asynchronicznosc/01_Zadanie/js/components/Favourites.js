//
// Favourites.propTypes = {
//   quotes: PropTypes.array.isRequired
// };

import Favourites from "../containers/Favourites";
// import React from 'react';

// const Favourites = (props) =>
//     <ul>
//         {props.favourites.map((element, index) => <li kay={index}>{element}</li>)}
//     </ul>
//
// export default Favourites;
import React from 'react';

const FavouritesArray = ({favourites}) => {
    console.log(favourites)
    return (
        <div>
            <ul>
                {favourites.map((element, index) => <li kay={index}>{element.quote}</li>)}
            </ul>

        </div>
    );
};

export default FavouritesArray;