// Pamiętaj aby na końcu pliku wyeksportować komponent jako domyślny export
// np. export default User
import React from 'react';
import PropTypes from "prop-types";

const User = ({firstName, lastName, onClick, age}) => {
    User.propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.string,
        onClick: PropTypes.func.isRequired
    };


    return (
        <div>
            <h1>Cześć! {firstName} {lastName}</h1>
            {age && <div>Masz {age} lat</div>}
            <button onClick={onClick}>Funkcja</button>

        </div>
    );


};

export default User;