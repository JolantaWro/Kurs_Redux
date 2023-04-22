import React from "react";
import Panel from "../Panel";

const AllRecipes = ({ allRecipes }) => {

  return (
    <>
      <h1 className="title">Wszystkie przepisy</h1>
      <Panel iconName={"folder"}
             path={"recipes"}
             listElements={allRecipes}
             heading={false}
             footer={false}
      />
    </>
  );
};

export default AllRecipes;

