import React from "react";

//const imgSrc = "https://www.raletta.in/images/rocket.gif";
const imgSrc = "https://media.tenor.com/Enn7lYXb5FoAAAAi/rocket-spaceship.gif";

const Rocket = ({ isLaunched }) =>
  <img
    alt="rocket"
    src={imgSrc}
    className={`rocket ${isLaunched ? 'launched': ''}`}
  />;

export default Rocket;
