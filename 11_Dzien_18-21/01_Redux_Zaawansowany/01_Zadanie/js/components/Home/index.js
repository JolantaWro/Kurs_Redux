import React from "react";
import LastRecipes from "./LastRecipes";
import LastProducts from "./LastProducts";

const Home = ({lastProducts, lastRecipes}) => {
  return (
    <div className="columns">
      <div className="column is-one-third">
        <LastRecipes lastRecipes={lastRecipes}/>
      </div>
      <div className="column is-one-third">
        <LastProducts lastProducts={lastProducts}/>
      </div>
    </div>

  );
};

export default Home;