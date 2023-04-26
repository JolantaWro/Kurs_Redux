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